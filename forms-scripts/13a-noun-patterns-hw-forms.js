function criarFormularioNounPatternsHW() {
  var form = FormApp.create('13a - Lição de Casa: Padrões de Substantivos em Inglês');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Todas as questões são obrigatórias e focam nos padrões de substantivos (singular/plural).');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. We have three ______ in the kitchen. (tomates - plural de tomato)', options: ['tomatos', 'tomatoes', 'tomatoeses'], correct: 'tomatoes', voc: 'have = temos | kitchen = cozinha' },
    { q: '2. Those ______ are singing in the choir. (mulheres - plural de woman)', options: ['womans', 'women', 'womens'], correct: 'women', voc: 'are singing = estão cantando | choir = coro' },
    { q: '3. Two ______ ran across the kitchen floor. (ratos - plural de mouse)', options: ['mouses', 'mice', 'mices'], correct: 'mice', voc: 'ran across = correram por | floor = chão' },
    { q: '4. The city has many new ______. (bibliotecas - plural de library)', options: ['librarys', 'libraries', 'librares'], correct: 'libraries', voc: 'has = tem | new = novas' },
    { q: '5. She wants to buy some ______ flowers. (amarelas - concordância do adjetivo)', options: ['yellow', 'yellows', 'yellow\'s'], correct: 'yellow', voc: 'wants to buy = quer comprar | some = algumas' },
    { q: '6. Look at the ______! It is very high. (montanha - gênero neutro para objetos)', options: ['mountain', 'mountains', 'mountaines'], correct: 'mountain', voc: 'high = alta' },
    { q: '7. A group of ______ is standing near the gate. (pessoas - plural de person)', options: ['persons', 'people', 'peoples'], correct: 'people', voc: 'group of = grupo de | standing = de pé | gate = portão' },
    { q: '8. Do you have the ______ to the apartment? (chaves - plural de key)', options: ['keys', 'keyes', 'keies'], correct: 'keys', voc: 'Do you have = você tem' },
    { q: '9. The dentist cleaned my ______ today. (dentes - plural de tooth)', options: ['tooths', 'teeth', 'teeths'], correct: 'teeth', voc: 'dentist = dentista | cleaned = limpou' },
    { q: '10. Several ______ fell from the oak tree. (folhas - plural de leaf)', options: ['leafs', 'leaves', 'leafes'], correct: 'leaves', voc: 'fell = caíram | oak tree = carvalho' }
  ];

  dadosLacunas.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
      .setHelpText('Selecione a opção correta. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt === itemData.correct);
    });
    item.setChoices(choices);
  });

  // --- Tradução PT para EN (Questões 11 a 18) ---
  var dadosTraducaoPT_EN = [
    { num: '11', pt: 'Ele tem três gatos pretos.', options: ['He has three black cats.', 'He has three blacks cats.', 'He have three black cats.'], correct: 'He has three black cats.', voc: 'Ele tem = He has | Três = three | Pretos = black | Gatos = cats' },
    { num: '12', pt: 'Nós somos pessoas felizes.', options: ['We are happy people.', 'We are happy peoples.', 'We are happy person.'], correct: 'We are happy people.', voc: 'Nós somos = We are | Felizes = happy | Pessoas = people' },
    { num: '13', pt: 'Onde está a minha chave azul?', options: ['Where is my blue key?', 'Where is my blues key?', 'Where are my blue keys?'], correct: 'Where is my blue key.', voc: 'Onde está = Where is | Minha = my | Azul = blue | Chave = key' },
    { num: '14', pt: 'Elas são mulheres inteligentes.', options: ['They are intelligent women.', 'They are intelligent womans.', 'They are intelligents women.'], correct: 'They are intelligent women.', voc: 'Elas são = They are | Inteligentes = intelligent | Mulheres = women' },
    { num: '15', pt: 'As crianças estão jogando videogame.', options: ['The children are playing video games.', 'The childs are playing video games.', 'The children is playing video games.'], correct: 'The children are playing video games.', voc: 'Crianças = children | Jogando = playing' },
    { num: '16', pt: 'Eu preciso de duas caixas grandes.', options: ['I need two big boxes.', 'I need two bigs boxes.', 'I need two big box.'], correct: 'I need two big boxes.', voc: 'Eu preciso de = I need | Duas = two | Grandes = big | Caixas = boxes' },
    { num: '17', pt: 'Esta casa tem muitas janelas brancas.', options: ['This house has many white windows.', 'This house has many whites windows.', 'This houses have many white windows.'], correct: 'This house has many white windows.', voc: 'Esta = this | Casa = house | Tem = has | Brancas = white | Janelas = windows' },
    { num: '18', pt: 'A lua está brilhante hoje à noite.', options: ['The moon is bright tonight.', 'A moon is bright tonight.', 'Moon is bright tonight.'], correct: 'The moon is bright tonight.', voc: 'A lua = The moon | Brilhante = bright | Hoje à noite = tonight' }
  ];

  dadosTraducaoPT_EN.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
      .setHelpText('Selecione a tradução correta. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim().replace('.', '') === itemData.correct.trim().replace('.', ''));
    });
    item.setChoices(choices);
  });

  // --- Tradução EN para PT (Questões 19 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '19', en: 'My feet are very cold.', options: ['Meus pés estão muito frios.', 'Meu pé está muito frio.', 'Meus pés estão muito frio.'], correct: 'Meus pés estão muito frios.', voc: 'Feet = pés | Very = muito | Cold = frios' },
    { num: '20', en: 'Those beautiful birds are singing.', options: ['Aqueles pássaros bonitos estão cantando.', 'Aquele pássaro bonito está cantando.', 'Aqueles pássaros bonitos está cantando.'], correct: 'Aqueles pássaros bonitos estão cantando.', voc: 'Beautiful = bonitos | Birds = pássaros | Singing = cantando' },
    { num: '21', en: 'The men are working in the office.', options: ['Os homens estão trabalhando no escritório.', 'O homem está trabalhando no escritório.', 'Os homens trabalham na oficina.'], correct: 'Os homens estão trabalhando no escritório.', voc: 'Men = homens | Working = trabalhando | Office = escritório' },
    { num: '22', en: 'It is an expensive computer.', options: ['É um computador caro.', 'Ela é um computador caro.', 'Eles são computadores caros.'], correct: 'É um computador caro.', voc: 'Expensive = caro | Computer = computador' },
    { num: '23', en: 'They saw two mice in the garden.', options: ['Eles viram dois ratos no jardim.', 'Eles viram dois rato no jardim.', 'Eles viram duas ratazanas no quintal.'], correct: 'Eles viram dois ratos no jardim.', voc: 'Saw = viram | Mice = ratos | Garden = jardim' },
    { num: '24', en: 'She has many interesting books.', options: ['Ela tem muitos livros interessantes.', 'Ela tem muitos livro interessante.', 'Meus irmãos têm muitos livros interessantes.'], correct: 'Ela tem muitos livros interessantes.', voc: 'Has = tem | Interesting = interessantes | Books = livros' },
    { num: '25', en: 'He broke three glasses yesterday.', options: ['Ele quebrou três copos ontem.', 'Ele quebrou três copo ontem.', 'Ele quebrou três vidros hoje.'], correct: 'Ele quebrou três copos ontem.', voc: 'Broke = quebrou | Glasses = copos | Yesterday = ontem' }
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

  Logger.log('Formulário de Lição de Casa 13A criado. URL: ' + form.getEditUrl());
}
