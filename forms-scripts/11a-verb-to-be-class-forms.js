function criarFormularioVerbToBeClass() {
  var form = FormApp.create('11a - Aula: Verb to be');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões praticadas em sala de aula.');

  // --- GRUPO A: Substituição (Questões 1 a 5) ---
  var dadosGrupoA = [
    {q: '1. Substitua pelo verbo to be correspondente: Carlos -> ______ a doctor.'},
    {q: '2. Substitua pelo verbo to be correspondente: You and I -> ______ friends.'},
    {q: '3. Substitua pelo verbo to be correspondente: The books -> ______ on the table.'},
    {q: '4. Substitua pelo verbo to be correspondente: Mary -> ______ a student.'},
    {q: '5. Substitua pelo verbo to be correspondente: The dog -> ______ white.'}
  ];
  
  dadosGrupoA.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com: am, is ou are.')
        .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Questões 6 a 10) ---
  var dadosGrupoB = [
    {q: '6. I ______ hungry.'},
    {q: '7. They ______ in the kitchen.'},
    {q: '8. She ______ busy.'},
    {q: '9. It ______ very hot today.'},
    {q: '10. We ______ late.'}
  ];

  dadosGrupoB.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com a conjugação correta do verbo to be.')
        .setRequired(true);
  });

  // --- GRUPO C: Regras (Questões 11 a 15) ---
  var dadosGrupoC = [
    {q: '11. Verdadeiro ou Falso: "Am" é usado apenas com o pronome "I".'},
    {q: '12. Verdadeiro ou Falso: "Are" é a forma usada para singular e plural de "you".'},
    {q: '13. Verdadeiro ou Falso: "Is" é usado com "We".'},
    {q: '14. Verdadeiro ou Falso: "They" é conjugado com "is".'},
    {q: '15. Verdadeiro ou Falso: O verbo "to be" pode significar tanto "ser" quanto "estar".'}
  ];

  dadosGrupoC.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Responda com "Verdadeiro" ou "Falso".')
        .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    {num: '16', pt: 'Eu sou feliz.', voc: 'Eu = I | Feliz = happy'},
    {num: '17', pt: 'Ele está no carro.', voc: 'Ele = He | No = in the | Carro = car'},
    {num: '18', pt: 'Nós somos estudantes.', voc: 'Nós = We | Estudantes = students'},
    {num: '19', pt: 'Ela é médica.', voc: 'Ela = She | Médica = a doctor'},
    {num: '20', pt: 'Eles estão cansados.', voc: 'Eles = They | Cansados = tired'}
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    {num: '21', en: 'You are here.', voc: 'You = você/vocês | Here = aqui'},
    {num: '22', en: 'It is a cat.', voc: 'It = isto/ele | A = um | Cat = gato'},
    {num: '23', en: 'We are happy.', voc: 'We = nós | Happy = felizes'},
    {num: '24', en: 'She is my sister.', voc: 'She = ela | My = minha | Sister = irmã'},
    {num: '25', en: 'They are at school.', voc: 'They = eles/elas | At school = na escola'}
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Aula 11A criado. URL: ' + form.getEditUrl());
}
