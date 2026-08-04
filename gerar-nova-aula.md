# 🚀 Workflow de Nova Aula

Copie a linha abaixo, mude os temas em colchetes e cole no chat para iniciar o processo automaticamente:

> Execute o workflow de criação de nova aula utilizando as regras de @Geradordeaulas.md e @Geradordescriptforms.md. Os temas desta aula são:
>
> * **Número da Aula:** [Ex: 16a e 16b]
> * **Tema A (Iniciante):** [Escreva o tema 1 aqui]
> * **Tema B (Intermediário):** [Escreva o tema 2 aqui]

### Etapas do Workflow Padrão Executadas Automáticamente pelo Assistente:
1. **Conteúdo Pedagógico & Exercícios:** Geração das explicações gramaticais, listas de conjugação e 25 exercícios de Aula (Class) + 25 exercícios de Casa (Homework) para cada tema (A e B).
2. **Scripts de Formulário:** Criação dos arquivos `.js` em `forms-scripts/` (`<aula>-class-forms.js` e `<aula>-hw-forms.js`).
3. **Google Forms API (Automático):** Execução automática de `python3 create_form_api.py forms-scripts/...` para gerar os formulários no Google Drive e obter os links de edição e envio.
4. **Slides HTML com Formulários:** Criação dos arquivos de apresentação em `lessons/` (`<aula>.html`). Cada apresentação inclui obrigatoriamente um slide de **Formulários da Aula** com QR Codes e botões estilizados apontando para os formulários de Aula e Casa.
5. **Atualização do Index:** Adição dos cards correspondentes das novas lições no arquivo `index.html`.
