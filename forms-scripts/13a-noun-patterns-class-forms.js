function criarFormularioNounPatternsClass() {
  var form = FormApp.create('13a - Aula: Padrões de Substantivos em Inglês');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões de padrões de substantivos (singular/plural) praticadas em classe.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. We have three ______ in our garden. (caixas - plural de box)', options: ['boxs', 'boxes', 'boxies'], correct: 'boxes', voc: 'have = temos | garden = jardim' },
    { q: '2. Those ______ are playing football. (crianças - plural de child)', options: ['childs', 'children', 'childrens'], correct: 'children', voc: 'Those = aqueles/aquelas | are playing = estão jogando' },
    { q: '3. I bought two ______ yesterday. (facas - plural de knife)', options: ['knifes', 'knives', 'knifees'], correct: 'knives', voc: 'bought = comprei | yesterday = ontem' },
    { q: '4. The ______ are sleeping. (bebês - plural de baby)', options: ['babies', 'babys', 'babyes'], correct: 'babies', voc: 'are sleeping = estão dormindo' },
    { q: '5. They have two ______ cars. (vermelhos - concordância do adjetivo)', options: ['reds', 'red', 'red\'s'], correct: 'red', voc: 'have = têm | cars = carros' },
    { q: '6. Look at that ______! It is very beautiful. (casa - gênero neutro para objetos)', options: ['house', 'houses', 'housies'], correct: 'house', voc: 'Look at = olhe para | beautiful = linda' },
    { q: '7. Five ______ are waiting for the bus. (homens - plural de man)', options: ['mans', 'men', 'mens'], correct: 'men', voc: 'are waiting for = estão esperando por | bus = ônibus' },
    { q: '8. She has many ______ at school. (amigos - plural de friend)', options: ['friends', 'friendes', 'friend\'s'], correct: 'friends', voc: 'has = tem | many = muitos/muitas | at school = na escola' },
    { q: '9. We need to wash our ______. (pés - plural de foot)', options: ['foots', 'feets', 'feet'], correct: 'feet', voc: 'need to wash = precisamos lavar' },
    { q: '10. Several ______ are talking in the room. (mulheres - plural de woman)', options: ['womans', 'women', 'womens'], correct: 'women', voc: 'Several = várias | are talking = estão conversando | room = sala' }
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
    { num: '11', pt: 'Eu tenho dois carros novos.', options: ['I have two new cars.', 'I have two news cars.', 'I have two new car.'], correct: 'I have two new cars.', voc: 'Eu tenho = I have | Dois = two | Novos = new | Carros = cars' },
    { num: '12', pt: 'Ela é uma pessoa legal.', options: ['She is a nice person.', 'She is an nice person.', 'She is a nice people.'], correct: 'She is a nice person.', voc: 'Ela é = She is | Uma = a | Pessoa = person | Legal = nice' },
    { num: '13', pt: 'Onde estão os meus livros pretos?', options: ['Where are my black books?', 'Where are my blacks books?', 'Where is my black books?'], correct: 'Where are my black books?', voc: 'Onde estão = Where are | Meus = my | Pretos = black | Livros = books' },
    { num: '14', pt: 'Eles são homens felizes.', options: ['They are happy men.', 'They are happys mans.', 'They are happy mans.'], correct: 'They are happy men.', voc: 'Eles são = They are | Felizes = happy | Homens = men' },
    { num: '15', pt: 'As chaves estão em cima da mesa.', options: ['The keys are on the table.', 'The key is on the table.', 'A keys are on the table.'], correct: 'The keys are on the table.', voc: 'Chaves = keys | Estão = are | Em cima da = on the | Mesa = table' },
    { num: '16', pt: 'Duas mulheres estão trabalhando.', options: ['Two women are working.', 'Two womans are working.', 'Two women is working.'], correct: 'Two women are working.', voc: 'Duas = two | Mulheres = women | Estão trabalhando = are working' },
    { num: '17', pt: 'Eu vejo três cães pequenos.', options: ['I see three small dogs.', 'I see three smalls dogs.', 'I see three small dog.'], correct: 'I see three small dogs.', voc: 'Eu vejo = I see | Três = three | Pequenos = small | Cães = dogs' },
    { num: '18', pt: 'O sol é muito quente.', options: ['The sun is very hot.', 'A sun is very hot.', 'Sun is very hot.'], correct: 'The sun is very hot.', voc: 'O sol = The sun | É muito = is very | Quente = hot' }
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

  // --- Tradução EN para PT (Questões 19 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '19', en: 'The children are eating green apples.', options: ['As crianças estão comendo maçãs verdes.', 'A criança está comendo maçã verde.', 'As crianças estão comendo maçãs verde.'], correct: 'As crianças estão comendo maçãs verdes.', voc: 'Children = crianças | Eating = comendo | Green = verdes | Apples = maçãs' },
    { num: '20', en: 'Those houses are very old.', options: ['Aquelas casas são muito antigas.', 'Aquela casa é muito antiga.', 'Aquelas casas são muito antiga.'], correct: 'Aquelas casas são muito antigas.', voc: 'Those = aquelas | Houses = casas | Very = muito | Old = antigas' },
    { num: '21', en: 'The people are waiting outside.', options: ['As pessoas estão esperando lá fora.', 'A pessoa está esperando lá fora.', 'O povo está esperando dentro.'], correct: 'As pessoas estão esperando lá fora.', voc: 'People = pessoas | Waiting = esperando | Outside = lá fora' },
    { num: '22', en: 'It is an interesting book.', options: ['É um livro interessante.', 'Ela é um livro interessante.', 'Eles são livros interessantes.'], correct: 'É um livro interessante.', voc: 'Interesting = interessante | Book = livro' },
    { num: '23', en: 'My sister has white teeth.', options: ['Minha irmã tem dentes brancos.', 'Minha irmã tem dente branco.', 'Meus irmãos têm dentes brancos.'], correct: 'Minha irmã tem dentes brancos.', voc: 'Sister = irmã | Has = tem | White = brancos | Teeth = dentes' },
    { num: '24', en: 'We bought some blue boxes.', options: ['Nós compramos algumas caixas azuis.', 'Nós compramos algumas caixa azul.', 'Nós compramos alguns azuis caixas.'], correct: 'Nós compramos algumas caixas azuis.', voc: 'Bought = compramos | Some = algumas | Blue = azuis | Boxes = caixas' },
    { num: '25', en: 'He has two big feet.', options: ['Ele tem dois pés grandes.', 'Ele tem dois pé grande.', 'Ele tem duas mãos grandes.'], correct: 'Ele tem dois pés grandes.', voc: 'Has = tem | Two = dois | Big = grandes | Feet = pés' }
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

  Logger.log('Formulário de Aula 13A criado. URL: ' + form.getEditUrl());
}
