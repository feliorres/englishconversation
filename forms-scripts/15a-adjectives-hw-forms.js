function criarFormularioAdjectivesHW() {
  var form = FormApp.create('15a - Homework: Posição e Invariabilidade dos Adjetivos');
  form.setIsQuiz(true);
  form.setDescription('Dever de Casa: Responda às 25 questões de fixação sobre a posição e invariabilidade dos adjetivos.');

  // --- Complete / Escolha a posição correta (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Complete: "He has a ______ (novo) phone."', options: ['new', 'news', 'phone new'], correct: 'new', voc: 'new = novo | phone = celular' },
    { q: '2. Escolha o plural correto: "They are ______ (felizes) children."', options: ['happy', 'happys', 'happies'], correct: 'happy', voc: 'happy = feliz/felizes | children = crianças' },
    { q: '3. Como se diz "uma pergunta fácil" em inglês?', options: ['an easy question', 'a question easy', 'easy a question'], correct: 'an easy question', voc: 'easy = fácil | question = pergunta' },
    { q: '4. Qual frase está CORRETA?', options: ['She buys expensive shoes.', 'She buys expensives shoes.', 'She buys shoes expensives.'], correct: 'She buys expensive shoes.', voc: 'buys = compra | expensive = caros | shoes = sapatos' },
    { q: '5. Escolha a opção com a ordem correta:', options: ['a dark room', 'a room dark', 'dark a room'], correct: 'a dark room', voc: 'dark = escuro/escura | room = quarto' }
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
    { q: '6. It is a ______ (quente) day.', options: ['hot', 'hots', 'day hot'], correct: 'hot', voc: 'hot = quente | day = dia' },
    { q: '7. They are ______ (fortes) players.', options: ['strong', 'strongs', 'players strong'], correct: 'strong', voc: 'strong = forte(s) | players = jogadores' },
    { q: '8. I see ______ (verdes) trees.', options: ['green', 'greens', 'trees green'], correct: 'green', voc: 'green = verde(s) | trees = árvores' },
    { q: '9. She wears a ______ (branca) shirt.', options: ['white', 'whites', 'shirt white'], correct: 'white', voc: 'white = branca | shirt = camisa' },
    { q: '10. We visited ______ (antigos) museums.', options: ['old', 'olds', 'museums old'], correct: 'old', voc: 'old = antigo(s) | museums = museus' }
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
    { q: '11. Por que dizemos "two big houses" e não "two bigs houses"?', options: ['Porque adjetivos em inglês não têm forma no plural.', 'Porque big já significa grande no plural.', 'Porque house já está no plural.'], correct: 'Porque adjetivos em inglês não têm forma no plural.', voc: 'big = grande/grandes' },
    { q: '12. Qual frase está INCORRETA gramaticalmente?', options: ['They have cheap cars.', 'They have cheaps cars.', 'The cars are cheap.'], correct: 'They have cheaps cars.', voc: 'cheap = barato(s)' },
    { q: '13. Em "The story is interesting", qual é o adjetivo?', options: ['interesting', 'story', 'is'], correct: 'interesting', voc: 'story = história | interesting = interessante' },
    { q: '14. Qual opção traduz "gatos pretos" corretamente?', options: ['black cats', 'blacks cats', 'cats blacks'], correct: 'black cats', voc: 'black = preto(s) | cats = gatos' },
    { q: '15. Onde colocamos o adjetivo na expressão "um filme longo"?', options: ['a long movie', 'a movie long', 'long a movie'], correct: 'a long movie', voc: 'long = longo | movie = filme' }
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
    { num: '16', pt: 'Eu tenho um carro rápido.', options: ['I have a fast car.', 'I have a car fast.', 'I have fast a car.'], correct: 'I have a fast car.', voc: 'fast = rápido | car = carro' },
    { num: '17', pt: 'Ela vive em um apartamento pequeno.', options: ['She lives in a small apartment.', 'She lives in an apartment small.', 'She lives in small an apartment.'], correct: 'She lives in a small apartment.', voc: 'small = pequeno | apartment = apartamento' },
    { num: '18', pt: 'Eles trabalham com pessoas inteligentes.', options: ['They work with smart people.', 'They work with smarts people.', 'They work with people smart.'], correct: 'They work with smart people.', voc: 'work = trabalham | smart = inteligente(s) | people = pessoas' },
    { num: '19', pt: 'Nós comemos maçãs doces.', options: ['We eat sweet apples.', 'We eat sweets apples.', 'We eat apples sweet.'], correct: 'We eat sweet apples.', voc: 'eat = comemos | sweet = doce(s) | apples = maçãs' },
    { num: '20', pt: 'Ele é um cantor famoso.', options: ['He is a famous singer.', 'He is a singer famous.', 'He is famous a singer.'], correct: 'He is a famous singer.', voc: 'famous = famoso | singer = cantor' }
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
    { num: '21', en: 'This is a heavy box.', options: ['Esta é uma caixa pesada.', 'Esta é uma caixa leve.', 'Estas são caixas pesadas.'], correct: 'Esta é uma caixa pesada.', voc: 'heavy = pesada | box = caixa' },
    { num: '22', en: 'They buy clean water.', options: ['Eles compram água limpa.', 'Eles compram água suja.', 'Eles vendem água limpa.'], correct: 'Eles compram água limpa.', voc: 'buy = compram | clean = limpa | water = água' },
    { num: '23', en: 'She wears warm coats.', options: ['Ela veste casacos quentes.', 'Ela veste casacos leves.', 'Ela vende casacos quentes.'], correct: 'Ela veste casacos quentes.', voc: 'wears = veste | warm = quente(s) | coats = casacos' },
    { num: '24', en: 'We have noisy neighbors.', options: ['Nós temos vizinhos barulhentos.', 'Nós temos vizinhos silenciosos.', 'Nós somos vizinhos barulhentos.'], correct: 'Nós temos vizinhos barulhentos.', voc: 'noisy = barulhentos | neighbors = vizinhos' },
    { num: '25', en: 'He writes short stories.', options: ['Ele escreve histórias curtas.', 'Ele escreve histórias longas.', 'Ele lê histórias curtas.'], correct: 'Ele escreve histórias curtas.', voc: 'writes = escreve | short = curta(s) | stories = histórias' }
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

  Logger.log('Formulário HW 15a criado com sucesso! URL: ' + form.getEditUrl());
}
