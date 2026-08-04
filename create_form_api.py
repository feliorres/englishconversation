import os
import sys
import json
import subprocess
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build

SCOPES = [
    'https://www.googleapis.com/auth/forms.body',
    'https://www.googleapis.com/auth/drive.file'
]

JS_PARSER_SCRIPT = """
const fs = require('fs');
const vm = require('vm');

const jsFilePath = process.argv[2];
if (!jsFilePath || !fs.existsSync(jsFilePath)) {
  console.error(JSON.stringify({ error: 'Arquivo JS não encontrado: ' + jsFilePath }));
  process.exit(1);
}

const jsCode = fs.readFileSync(jsFilePath, 'utf8');

const formData = {
  title: 'Formulário Sem Título',
  description: '',
  isQuiz: false,
  items: []
};

class MockForm {
  setTitle(t) { formData.title = t; return this; }
  setDescription(d) { formData.description = d; return this; }
  setIsQuiz(q) { formData.isQuiz = q; return this; }
  getEditUrl() { return 'https://docs.google.com/forms'; }
  
  addTextItem() {
    const item = { type: 'TEXT', title: '', helpText: '', required: false };
    const builder = {
      setTitle(t) { item.title = t; return builder; },
      setHelpText(h) { item.helpText = h; return builder; },
      setRequired(r) { item.required = r; return builder; }
    };
    formData.items.push(item);
    return builder;
  }

  addMultipleChoiceItem() {
    const item = { type: 'MULTIPLE_CHOICE', title: '', helpText: '', required: false, options: [], correct: null };
    const builder = {
      setTitle(t) { item.title = t; return builder; },
      setHelpText(h) { item.helpText = h; return builder; },
      setRequired(r) { item.required = r; return builder; },
      createChoice(value, isCorrect) {
        return { value, isCorrect: !!isCorrect };
      },
      setChoices(choices) {
        item.options = choices.map(c => typeof c === 'string' ? c : c.value);
        const correctChoice = choices.find(c => c && c.isCorrect);
        if (correctChoice) item.correct = correctChoice.value;
        return builder;
      }
    };
    formData.items.push(item);
    return builder;
  }
}

const sandbox = {
  FormApp: {
    create: (title) => {
      const form = new MockForm();
      form.setTitle(title);
      return form;
    }
  },
  Logger: { log: () => {} },
  console: console
};

try {
  vm.runInNewContext(jsCode, sandbox);
  let foundFn = false;
  for (const key in sandbox) {
    if (typeof sandbox[key] === 'function' && key.startsWith('criarFormulario')) {
      sandbox[key]();
      foundFn = true;
      break;
    }
  }
  if (!foundFn) {
    console.error(JSON.stringify({ error: 'Nenhuma função criarFormulario... encontrada no script.' }));
    process.exit(1);
  }
  console.log(JSON.stringify(formData));
} catch (err) {
  console.error(JSON.stringify({ error: err.message }));
  process.exit(1);
}
"""

def extract_form_data_from_js(js_file_path):
    temp_parser = "_temp_js_parser.js"
    with open(temp_parser, "w", encoding="utf-8") as f:
        f.write(JS_PARSER_SCRIPT)
    
    try:
        res = subprocess.run(["node", temp_parser, js_file_path], capture_output=True, text=True)
        if os.path.exists(temp_parser):
            os.remove(temp_parser)
            
        if res.returncode != 0:
            print(f"Erro ao processar arquivo JS: {res.stderr}")
            sys.exit(1)
            
        return json.loads(res.stdout)
    except Exception as e:
        if os.path.exists(temp_parser):
            os.remove(temp_parser)
        raise e

def get_credentials():
    creds = None
    if os.path.exists('token.json'):
        creds = Credentials.from_authorized_user_file('token.json', SCOPES)
    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
        else:
            if not os.path.exists('credentials.json'):
                print("ERRO: O arquivo 'credentials.json' não foi encontrado na raiz do projeto.")
                sys.exit(1)
            flow = InstalledAppFlow.from_client_secrets_file('credentials.json', SCOPES)
            creds = flow.run_local_server(port=0)
        with open('token.json', 'w') as token:
            token.write(creds.to_json())
    return creds

def create_google_form(form_data):
    creds = get_credentials()
    service = build('forms', 'v1', credentials=creds)

    # 1. Cria o formulário base
    form_body = {
        "info": {
            "title": form_data.get("title", "Novo Formulário de Inglês")
        }
    }
    form_res = service.forms().create(body=form_body).execute()
    form_id = form_res["formId"]
    responder_uri = form_res.get("responderUri", "")

    # 2. Prepara batchUpdate
    requests = []

    # Configura Descrição se houver
    if form_data.get("description"):
        requests.append({
            "updateFormInfo": {
                "info": {
                    "description": form_data["description"]
                },
                "updateMask": "description"
            }
        })

    # Configura Quiz se isQuiz for True
    if form_data.get("isQuiz"):
        requests.append({
            "updateSettings": {
                "settings": {
                    "quizSettings": {
                        "isQuiz": True
                    }
                },
                "updateMask": "quizSettings.isQuiz"
            }
        })

    # Adiciona os itens (questões)
    for index, item in enumerate(form_data.get("items", [])):
        item_title = item.get("title", "")
        item_help = item.get("helpText", "")
        is_required = item.get("required", True)
        item_type = item.get("type")

        question_body = {
            "required": is_required
        }

        if item_type == "TEXT":
            question_body["textQuestion"] = {}
        elif item_type == "MULTIPLE_CHOICE":
            options_payload = [{"value": opt} for opt in item.get("options", [])]
            question_body["choiceQuestion"] = {
                "type": "RADIO",
                "options": options_payload,
                "shuffle": False
            }
            correct_val = item.get("correct")
            if correct_val:
                question_body["grading"] = {
                    "pointValue": 1,
                    "correctAnswers": {
                        "answers": [{"value": correct_val}]
                    }
                }

        create_item_req = {
            "createItem": {
                "item": {
                    "title": item_title,
                    "questionItem": {
                        "question": question_body
                    }
                },
                "location": {
                    "index": index
                }
            }
        }

        if item_help:
            create_item_req["createItem"]["item"]["description"] = item_help

        requests.append(create_item_req)

    # Envia batchUpdate em lote
    if requests:
        service.forms().batchUpdate(formId=form_id, body={"requests": requests}).execute()

    edit_url = f"https://docs.google.com/forms/d/{form_id}/edit"
    return edit_url, responder_uri

def main():
    if len(sys.argv) < 2:
        print("Uso: python3 create_form_api.py <caminho_do_script_js>")
        print("Exemplo: python3 create_form_api.py forms-scripts/10a-subject-pronouns-class-forms.js")
        sys.exit(1)

    js_file = sys.argv[1]
    print(f"📄 Lendo e extraindo dados de: {js_file}...")
    form_data = extract_form_data_from_js(js_file)

    print(f"🚀 Criando formulário no Google Drive: '{form_data['title']}'...")
    print(f"📊 Total de questões identificadas: {len(form_data['items'])}")

    edit_url, responder_uri = create_google_form(form_data)

    print("\n=======================================================")
    print("  ✅ FORMULÁRIO CRIADO COM SUCESSO NO GOOGLE DRIVE!")
    print("=======================================================")
    print(f"🔗 Link para Editar (Professor): {edit_url}")
    print(f"📝 Link para Enviar (Alunos):    {responder_uri}")
    print("=======================================================\n")

if __name__ == "__main__":
    main()
