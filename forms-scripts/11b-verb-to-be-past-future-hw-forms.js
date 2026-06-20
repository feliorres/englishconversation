function criarFormularioVerbToBePastFutureHW() {
  var form = FormApp.create('Lição de Casa: To Be no Passado e Futuro (Aula 11B)');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões de dever de casa.');

  // --- GRUPO A: Substituição (Questões 1 a 5) ---
  var dadosGrupoA = [
    {q: '1. Substitua pelo verbo to be correspondente: The dogs -> ______ hungry. (passado)'},
    {q: '2. Substitua pelo verbo to be correspondente: It -> ______ late soon. (futuro)'},
    {q: '3. Substitua pelo verbo to be correspondente: You and I -> ______ neighbors last year. (passado)'},
    {q: '4. Substitua pelo verbo to be correspondente: She -> ______ in London in 2020. (passado)'},
    {q: '5. Substitua pelo verbo to be correspondente: They -> ______ famous. (futuro)'}
  ];
  
  dadosGrupoA.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com: was, were ou will be.')
        .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Questões 6 a 10) ---
  var dadosGrupoB = [
    {q: '6. Last night, I ______ very tired.'},
    {q: '7. In two years, he ______ 18.'},
    {q: '8. They ______ at the cinema yesterday.'},
    {q: '9. We ______ at the beach next Saturday.'},
    {q: '10. The weather ______ hot yesterday.'}
  ];

  dadosGrupoB.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com a forma correta do verbo no passado (was/were) ou futuro (will be).')
        .setRequired(true);
  });

  // --- GRUPO C: Regras (Questões 11 a 15) ---
  var dadosGrupoC = [
    {q: '11. Verdadeiro ou Falso: Para formar a negativa no passado, usamos "was not" ou "were not".'},
    {q: '12. Verdadeiro ou Falso: "They was at the hotel" é uma frase gramaticalmente correta.'},
    {q: '13. Verdadeiro ou Falso: O futuro de "to be" pode ser encurtado para "\'ll be".'},
    {q: '14. Verdadeiro ou Falso: "We will be" significa "Nós seremos" ou "Nós estaremos".'},
    {q: '15. Verdadeiro ou Falso: Usamos "was" com "you".'}
  ];

  dadosGrupoC.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Responda com "Verdadeiro" ou "Falso".')
        .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    {num: '16', pt: 'Você estava na escola ontem?', voc: 'Você estava = Were you | Na escola = at school | Ontem = yesterday'},
    {num: '17', pt: 'Nós estaremos lá amanhã.', voc: 'Nós = We | Estaremos = will be | Lá = there | Amanhã = tomorrow'},
    {num: '18', pt: 'Ele era piloto.', voc: 'Ele = He | Era = was | Piloto = a pilot'},
    {num: '19', pt: 'Elas estarão ocupadas.', voc: 'Elas = They | Estarão = will be | Ocupadas = busy'},
    {num: '20', pt: 'O filme foi muito bom.', voc: 'O filme = The movie | Foi = was | Muito bom = very good'}
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    {num: '21', en: 'I was in New York last month.', voc: 'I = eu | Was = estava | In New York = em Nova York | Last month = no mês passado'},
    {num: '22', en: 'They will be at home.', voc: 'They = eles | Will be = estarão | At home = em casa'},
    {num: '23', en: 'We were very tired.', voc: 'We = nós | Were = estávamos | Very = muito | Tired = cansados'},
    {num: '24', en: 'She will be a dentist.', voc: 'She = ela | Will be = será | A = uma | Dentist = dentista'},
    {num: '25', en: 'It was dark.', voc: 'It = estava | Was = estava/era | Dark = escuro'}
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Casa 11B criado. URL: ' + form.getEditUrl());
}
