function criarFormularioObjectPossessivePronounsHW() {
  // 1. Cria o formulário e define o título
  var form = FormApp.create('10b - Lição de casa: Object and Possessive Pronouns');
  
  // 2. Configura como TESTE (Quiz)
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Esta é a sua lição de casa. Todas as questões são obrigatórias.');

  // --- GRUPO A: Substituição (Questões 1 a 5) ---
  var dadosGrupoA = [
    {q: '1. Substitua pelo pronome adequado: I like (Sarah) ______'},
    {q: '2. Substitua pelo pronome adequado: This pen is (of Robert / dele) ______'},
    {q: '3. Substitua pelo pronome adequado: They listen to (Pedro and I / nós) ______'},
    {q: '4. Substitua pelo pronome adequado: The dog is (of my neighbors / deles) ______'},
    {q: '5. Substitua pelo pronome adequado: She meets (John) ______ at the library'}
  ];
  
  dadosGrupoA.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Escreva o pronome correto em inglês (ex: me, him, hers, theirs, us, etc.).')
        .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Questões 6 a 10) ---
  var dadosGrupoB = [
    {q: '6. She loves ______ (Ela me ama).'},
    {q: '7. This laptop is ______ (Este notebook é meu).'},
    {q: '8. We invite ______ to the party (Nós os convidamos para a festa).'},
    {q: '9. The blue keys are ______ (As chaves azuis são dela).'},
    {q: '10. Can you help ______? (Você pode nos ajudar?).'}
  ];

  dadosGrupoB.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com o pronome objeto ou possessivo correto em inglês.')
        .setRequired(true);
  });

  // --- GRUPO C: Regras (Questões 11 a 15) ---
  var dadosGrupoC = [
    {q: '11. Verdadeiro ou Falso: Um pronome objeto como "them" pode ser o sujeito principal que executa a ação.'},
    {q: '12. Verdadeiro ou Falso: O pronome "yours" significa "seu/sua" e é usado sozinho, sem substantivo depois.'},
    {q: '13. Verdadeiro ou Falso: "His" pode funcionar tanto como adjetivo possessivo (ex: his car) quanto como pronome possessivo (ex: The car is his).'},
    {q: '14. Verdadeiro ou Falso: Usamos "her" após preposições como with, to ou for.'},
    {q: '15. Verdadeiro ou Falso: "Ours" significa "nosso/nossa" e deve vir acompanhado do substantivo imediatamente depois.'}
  ];

  dadosGrupoC.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Responda com "Verdadeiro" ou "Falso".')
        .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    {num: '16', pt: 'Eu o vejo.', voc: 'Eu = I | Vejo = see'},
    {num: '17', pt: 'O livro é dela.', voc: 'O = the | Livro = book | É = is'},
    {num: '18', pt: 'Eles nos ajudam.', voc: 'Eles = they | Ajudam = help'},
    {num: '19', pt: 'Este carro é meu.', voc: 'Este = this | Carro = car | É = is'},
    {num: '20', pt: 'Ela fala com eles.', voc: 'Ela = she | Fala com = talks to'}
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    {num: '21', en: 'This house is ours.', voc: 'This = esta | House = casa | Is = é'},
    {num: '22', en: 'He calls me.', voc: 'He = ele | Calls = liga para'},
    {num: '23', en: 'Is this yours?', voc: 'Is = é | This = isto/este'},
    {num: '24', en: 'They give her a book.', voc: 'They = eles | Give = dão | A = um | Book = livro'},
    {num: '25', en: 'We know him.', voc: 'We = nós | Know = conhecemos'}
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Casa 10B criado com sucesso! URL de edição: ' + form.getEditUrl());
}
