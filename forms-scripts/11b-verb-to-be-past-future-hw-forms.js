function criarFormularioVerbToBePastFutureHW() {
  var form = FormApp.create('11b - Lição de casa: To Be no Passado e Futuro');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões de dever de casa.');

  // --- GRUPO A: Substituição (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Substitua pelo verbo to be correspondente: The dogs -> ______ hungry. (passado)', voc: 'The dogs = os cães/cachorros | hungry = com fome / famintos' },
    { q: '2. Substitua pelo verbo to be correspondente: It -> ______ late soon. (futuro)', voc: 'late = tarde | soon = em breve / logo' },
    { q: '3. Substitua pelo verbo to be correspondente: You and I -> ______ neighbors last year. (passado)', voc: 'neighbors = vizinhos | last year = no ano passado' },
    { q: '4. Substitua pelo verbo to be correspondente: She -> ______ in London in 2020. (passado)', voc: 'in London = em Londres | in 2020 = em 2020' },
    { q: '5. Substitua pelo verbo to be correspondente: They -> ______ famous. (futuro)', voc: 'famous = famosos' }
  ];

  dadosGrupoA.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
      .setHelpText('Preencha com: was, were ou will be. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Questões 6 a 10) ---
  var dadosGrupoB = [
    { q: '6. Last night, I ______ very tired.', voc: 'Last night = ontem à noite | very = muito | tired = cansado(a)' },
    { q: '7. In two years, he ______ 18.', voc: 'In two years = em dois anos | 18 = 18 (anos)' },
    { q: '8. They ______ at the cinema yesterday.', voc: 'at the cinema = no cinema | yesterday = ontem' },
    { q: '9. We ______ at the beach next Saturday.', voc: 'at the beach = na praia | next Saturday = no próximo sábado' },
    { q: '10. The weather ______ hot yesterday.', voc: 'The weather = o tempo/clima | hot = quente | yesterday = ontem' }
  ];

  dadosGrupoB.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
      .setHelpText('Preencha com a forma correta do verbo no passado (was/were) ou futuro (will be). | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);
  });

  // --- GRUPO C: Regras (Questões 11 a 15) ---
  var dadosGrupoC = [
    { q: '11. Verdadeiro ou Falso: Para formar a negativa no passado, usamos "was not" ou "were not".' },
    { q: '12. Verdadeiro ou Falso: "They was at the hotel" é uma frase gramaticalmente correta.' },
    { q: '13. Verdadeiro ou Falso: O futuro de "to be" pode ser encurtado para "\'ll be".' },
    { q: '14. Verdadeiro ou Falso: "We will be" significa "Nós seremos" ou "Nós estaremos".' },
    { q: '15. Verdadeiro ou Falso: Usamos "was" com "you".' }
  ];

  dadosGrupoC.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
      .setHelpText('Responda com "Verdadeiro" ou "Falso".')
      .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    { num: '16', pt: 'Você estava na escola ontem?', voc: 'Na escola = at school | Ontem = yesterday' },
    { num: '17', pt: 'Nós estaremos lá amanhã.', voc: 'Lá = there | Amanhã = tomorrow' },
    { num: '18', pt: 'Ele era piloto.', voc: 'Piloto = a pilot' },
    { num: '19', pt: 'Elas estarão ocupadas.', voc: 'Ocupadas = busy' },
    { num: '20', pt: 'O filme foi muito bom.', voc: 'O filme = The movie | Muito bom = very good' }
  ];

  dadosTraducaoPT_EN.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
      .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '21', en: 'I was in New York last month.', voc: 'In New York = em Nova York | Last month = no mês passado' },
    { num: '22', en: 'They will be at home.', voc: 'At home = em casa' },
    { num: '23', en: 'We were very tired.', voc: 'Very = muito | Tired = cansados' },
    { num: '24', en: 'She will be a dentist.', voc: 'A = uma | Dentist = dentista' },
    { num: '25', en: 'It was dark.', voc: 'Dark = escuro' }
  ];

  dadosTraducaoEN_PT.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
      .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);
  });

  Logger.log('Formulário de Casa 11B criado. URL: ' + form.getEditUrl());
}
