function criarFormularioRegularVerbsHW() {
  var form = FormApp.create('16a - Homework: Verbos Regulares Frequentes no Present Simple');
  form.setIsQuiz(true);
  form.setDescription('Dever de Casa: Responda às 25 questões de fixação sobre os verbos regulares no Present Simple.');

  // --- Complete / Conjugação correta (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Complete com a forma correta: "He ______ (gosta) ice cream."', options: ['likes', 'like', 'liking'], correct: 'likes', voc: 'like = gostar | ice cream = sorvete' },
    { q: '2. Complete com a forma correta: "We ______ (trabalhamos) together."', options: ['work', 'works', 'working'], correct: 'work', voc: 'work = trabalhar | together = juntos' },
    { q: '3. Complete com a forma correta: "She ______ (mora) in New York."', options: ['lives', 'live', 'living'], correct: 'lives', voc: 'live = morar | New York = Nova York' },
    { q: '4. Complete com a forma correta: "They ______ (precisam) time."', options: ['need', 'needs', 'needing'], correct: 'need', voc: 'need = precisar | time = tempo' },
    { q: '5. Complete com a forma correta: "My sister ______ (joga) volleyball."', options: ['plays', 'play', 'playes'], correct: 'plays', voc: 'play = jogar | volleyball = vôlei' }
  ];

  dadosGrupoA.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
      .setHelpText('Selecione a opção correta. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  // --- Complete as Lacunas (Questões 6 a 10) ---
  var dadosGrupoB = [
    { q: '6. Carlos ______ (ajuda) his father at the store.', options: ['helps', 'help', 'helpes'], correct: 'helps', voc: 'help = ajudar | store = loja' },
    { q: '7. I ______ (ligo) to my friends every day.', options: ['call', 'calls', 'calling'], correct: 'call', voc: 'call = ligar | friends = amigos' },
    { q: '8. She ______ (precisa) a pen.', options: ['needs', 'need', 'needing'], correct: 'needs', voc: 'need = precisar | pen = caneta' },
    { q: '9. You ______ (moram) in a nice city.', options: ['live', 'lives', 'living'], correct: 'live', voc: 'live = morar | nice city = cidade legal' },
    { q: '10. The teacher ______ (ajuda) the students.', options: ['helps', 'help', 'helpes'], correct: 'helps', voc: 'help = ajudar | students = estudantes' }
  ];

  dadosGrupoB.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
      .setHelpText('Preencha a lacuna. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  // --- Regras e Julgamento (Questões 11 a 15) ---
  var dadosGrupoC = [
    { q: '11. Qual das seguintes frases contém um ERRO de conjugação?', options: ['He live in Canada.', 'He lives in Canada.', 'They live in Canada.'], correct: 'He live in Canada.', voc: 'live = morar' },
    { q: '12. Como conjugamos o verbo "to help" para o pronome "It"?', options: ['helps', 'help', 'helpes'], correct: 'helps', voc: 'help = ajudar' },
    { q: '13. Para qual pronome NÃO adicionamos "-s" ao verbo regular?', options: ['They', 'He', 'She'], correct: 'They', voc: 'pronomes no plural' },
    { q: '14. Qual a conjugação correta de "to play" para "She"?', options: ['plays', 'play', 'plaies'], correct: 'plays', voc: 'play = jogar/tocar' },
    { q: '15. O que acontece com o verbo quando usamos o pronome "We"?', options: ['Permanece na forma original sem "-s".', 'Adiciona-se "-s" obrigatoriamente.', 'Muda completamente.'], correct: 'Permanece na forma original sem "-s".', voc: 'We = nós' }
  ];

  dadosGrupoC.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
      .setHelpText('Responda à questão. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  // --- Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    { num: '16', pt: 'Ele trabalha em um restaurante.', options: ['He works in a restaurant.', 'He work in a restaurant.', 'He working in a restaurant.'], correct: 'He works in a restaurant.', voc: 'works = trabalha | restaurant = restaurante' },
    { num: '17', pt: 'Eu preciso de água.', options: ['I need water.', 'I needs water.', 'I needing water.'], correct: 'I need water.', voc: 'need = preciso | water = água' },
    { num: '18', pt: 'Ela joga piano muito bem.', options: ['She plays the piano very well.', 'She play the piano very well.', 'She playing piano very well.'], correct: 'She plays the piano very well.', voc: 'plays = toca/joga | piano = piano | very well = muito bem' },
    { num: '19', pt: 'Nós ligamos para a polícia.', options: ['We call the police.', 'We calls the police.', 'We calling the police.'], correct: 'We call the police.', voc: 'call = ligamos | police = polícia' },
    { num: '20', pt: 'Eles gostam de filmes de ação.', options: ['They like action movies.', 'They likes action movies.', 'They liking action movies.'], correct: 'They like action movies.', voc: 'like = gostam | action movies = filmes de ação' }
  ];

  dadosTraducaoPT_EN.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
      .setHelpText('Selecione a tradução correta. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  // --- Tradução EN para PT (Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '21', en: 'She helps old people.', options: ['Ela ajuda pessoas idosas.', 'Ela ajuda pessoas jovens.', 'Ela liga para pessoas idosas.'], correct: 'Ela ajuda pessoas idosas.', voc: 'helps = ajuda | old people = pessoas idosas' },
    { num: '22', en: 'He calls his mother every day.', options: ['Ele liga para a mãe dele todos os dias.', 'Ele ajuda a mãe dele todos os dias.', 'Ele mora com a mãe dele todos os dias.'], correct: 'Ele liga para a mãe dele todos os dias.', voc: 'calls = liga | mother = mãe | every day = todos os dias' },
    { num: '23', en: 'They live in Spain.', options: ['Eles moram na Espanha.', 'Eles trabalham na Espanha.', 'Eles viajam para a Espanha.'], correct: 'Eles moram na Espanha.', voc: 'live = moram | Spain = Espanha' },
    { num: '24', en: 'We play video games at night.', options: ['Nós jogamos videogame à noite.', 'Nós assistimos videogame à noite.', 'Nós compramos videogame à noite.'], correct: 'Nós jogamos videogame à noite.', voc: 'play = jogamos | video games = videogame | at night = à noite' },
    { num: '25', en: 'My sister needs a new bag.', options: ['Minha irmã precisa de uma bolsa nova.', 'Minha irmã tem uma bolsa nova.', 'Minha irmã gosta de uma bolsa nova.'], correct: 'Minha irmã precisa de uma bolsa nova.', voc: 'needs = precisa | bag = bolsa' }
  ];

  dadosTraducaoEN_PT.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
      .setHelpText('Selecione a tradução correta. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  Logger.log('Formulário HW 16a criado com sucesso! URL: ' + form.getEditUrl());
}
