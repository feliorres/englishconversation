function criarFormularioQuantifiersClass() {
  var form = FormApp.create('12b - Aula: Contáveis/Incontáveis e Quantificadores');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões praticadas em sala de aula.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. I don\'t have ______ money today. (muito - negativo, incontável)', voc: 'have = tenho | money = dinheiro | today = hoje' },
    { q: '2. Do you have ______ questions? (alguma - pergunta, contável)', voc: 'have = tem | questions = perguntas' },
    { q: '3. There are ______ students in the library. (alguns - afirmativa, contável)', voc: 'There are = há | students = estudantes | in the library = na biblioteca' },
    { q: '4. She has very ______ time to study. (pouco - incontável)', voc: 'has = tem | very = muito | time = tempo | to study = para estudar' },
    { q: '5. He bought ______ apples. (poucas - contável)', voc: 'bought = comprou | apples = maçãs' },
    { q: '6. How ______ friends do you have? (quantos - contável)', voc: 'friends = amigos | do you have = você tem' },
    { q: '7. How ______ water is there? (quanta - incontável)', voc: 'water = água | is there = há' },
    { q: '8. I don\'t see ______ cars outside. (nenhum - negativo, contável)', voc: 'see = vejo | cars = carros | outside = lá fora' },
    { q: '9. We need ______ sugar for the recipe. (um pouco de - incontável, afirmativa)', voc: 'need = precisamos de | sugar = açúcar | for the recipe = para a receita' },
    { q: '10. There is only a ______ hope left. (pouca - incontável)', voc: 'There is = há | only = apenas | hope = esperança | left = restante' }
  ];

  dadosLacunas.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com o quantificador correto (much, many, some, any, few, little). | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- Tradução PT para EN (Questões 11 a 18) ---
  var dadosTraducaoPT_EN = [
    { num: '11', pt: 'Eu não tenho muito tempo.', voc: 'Tempo = time' },
    { num: '12', pt: 'Ela tem muitos amigos na escola.', voc: 'Amigos = friends | Na escola = at school' },
    { num: '13', pt: 'Você quer um pouco de água?', voc: 'Você quer = Do you want | Água = water' },
    { num: '14', pt: 'Existem poucas pessoas aqui.', voc: 'Existem = There are | Pessoas = people | Aqui = here' },
    { num: '15', pt: 'Nós não temos nenhuma dúvida.', voc: 'Dúvida = doubt / doubts' },
    { num: '16', pt: 'Eu tenho poucas moedas no meu bolso.', voc: 'Moedas = coins | Bolso = pocket' },
    { num: '17', pt: 'Ele não tem muita paciência.', voc: 'Paciência = patience' },
    { num: '18', pt: 'Eles compraram algumas flores ontem.', voc: 'Compraram = bought | Flores = flowers | Ontem = yesterday' }
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- Tradução EN para PT (Questões 19 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '19', en: 'I have a little sugar in my tea.', voc: 'Sugar = açúcar | In my tea = no meu chá' },
    { num: '20', en: 'There aren\'t many cars on the street.', voc: 'There aren\'t = não há | Cars = carros | On the street = na rua' },
    { num: '21', en: 'Do you have any ideas?', voc: 'Ideas = ideias' },
    { num: '22', en: 'She spoke to a few students.', voc: 'Spoke to = falou com | Students = estudantes' },
    { num: '23', en: 'He doesn\'t have much money.', voc: 'Money = dinheiro' },
    { num: '24', en: 'We need some help with the boxes.', voc: 'Need = precisamos | Help = ajuda | With the boxes = com as caixas' },
    { num: '25', en: 'There are few options available.', voc: 'Options = opções | Available = disponíveis' }
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Aula 12B criado. URL: ' + form.getEditUrl());
}
