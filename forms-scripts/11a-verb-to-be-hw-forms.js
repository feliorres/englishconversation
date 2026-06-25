function criarFormularioVerbToBeHW() {
  var form = FormApp.create('11a - Lição de casa: Verb to be');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões de dever de casa.');

  // --- GRUPO A: Substituição (Questões 1 a 5) ---
  var dadosGrupoA = [
    {q: '1. Substitua pelo verbo to be correspondente: The cars -> ______ fast.'},
    {q: '2. Substitua pelo verbo to be correspondente: Peter and Jane -> ______ teachers.'},
    {q: '3. Substitua pelo verbo to be correspondente: The baby -> ______ asleep.'},
    {q: '4. Substitua pelo verbo to be correspondente: I -> ______ at work.'},
    {q: '5. Substitua pelo verbo to be correspondente: You -> ______ nice.'}
  ];
  
  dadosGrupoA.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com: am, is ou are.')
        .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Questões 6 a 10) ---
  var dadosGrupoB = [
    {q: '6. She ______ beautiful.'},
    {q: '7. It ______ my notebook.'},
    {q: '8. They ______ sad.'},
    {q: '9. We ______ in the garden.'},
    {q: '10. He ______ a good soccer player.'}
  ];

  dadosGrupoB.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com a conjugação correta do verbo to be.')
        .setRequired(true);
  });

  // --- GRUPO C: Regras (Questões 11 a 15) ---
  var dadosGrupoC = [
    {q: '11. Verdadeiro ou Falso: "We are" significa "Nós somos" ou "Nós estamos".'},
    {q: '12. Verdadeiro ou Falso: "It are a dog" é uma frase gramaticalmente correta.'},
    {q: '13. Verdadeiro ou Falso: Para fazer perguntas com o verbo to be, nós invertemos o sujeito e o verbo.'},
    {q: '14. Verdadeiro ou Falso: "She is" serve para "Ela é" ou "Ela está".'},
    {q: '15. Verdadeiro ou Falso: Usamos a forma "is" com o pronome "I".'}
  ];

  dadosGrupoC.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Responda com "Verdadeiro" ou "Falso".')
        .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    {num: '16', pt: 'Está frio hoje.', voc: 'Frio = cold | Hoje = today'},
    {num: '17', pt: 'Você é um bom professor.', voc: 'Você = You | Um bom = a good | Professor = teacher'},
    {num: '18', pt: 'Eles são amigos.', voc: 'Eles = They | Amigos = friends'},
    {num: '19', pt: 'Nós estamos com fome.', voc: 'Nós = We | Com fome = hungry'},
    {num: '20', pt: 'Ela está no trabalho.', voc: 'Ela = She | No trabalho = at work'}
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    {num: '21', en: 'He is a pilot.', voc: 'He = ele | A = um | Pilot = piloto'},
    {num: '22', en: 'They are from Italy.', voc: 'They = eles | From Italy = da Itália'},
    {num: '23', en: 'We are ready.', voc: 'We = nós | Ready = prontos'},
    {num: '24', en: 'I am tired.', voc: 'I = eu | Tired = cansado'},
    {num: '25', en: 'The sky is blue.', voc: 'The sky = o céu | Blue = azul'}
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Casa 11A criado. URL: ' + form.getEditUrl());
}
