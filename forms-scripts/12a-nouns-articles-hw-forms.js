function criarFormularioNounsArticlesHW() {
  var form = FormApp.create('12a - Lição de casa: Padrões de Substantivos e Artigos');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Todas as questões são obrigatórias e dissertativas.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. Do you want ______ orange? (uma - geral)', options: ['a', 'an', 'the'], correct: 'an', voc: 'Do you want = você quer | orange = laranja' },
    { q: '2. They live in ______ small apartment. (um - geral)', options: ['a', 'an', 'the'], correct: 'a', voc: 'live = moram | small = pequeno | apartment = apartamento' },
    { q: '3. ______ earth goes around the sun. (A - único)', options: ['A', 'An', 'The'], correct: 'The', voc: 'earth = terra | goes around = gira em torno do | sun = sol' },
    { q: '4. Change to plural: How many ______ live here? (person)', options: ['persons', 'people', 'peoples'], correct: 'people', voc: 'How many = quantos/quantas | live here = moram aqui' },
    { q: '5. Change to plural: Those ______ look friendly. (man)', options: ['man', 'mans', 'men'], correct: 'men', voc: 'Those = aqueles | look = parecem | friendly = amigáveis' },
    { q: '6. My uncle is ______ university student. (um - som /ju/)', options: ['a', 'an', 'the'], correct: 'a', voc: 'My uncle = meu tio | university = universitário | student = estudante' },
    { q: '7. I want to read ______ book on your desk. (o - específico)', options: ['a', 'an', 'the'], correct: 'the', voc: 'want to read = quero ler | book = livro | on your desk = na sua mesa' },
    { q: '8. They have ______ elephant and two tigers. (um - geral)', options: ['a', 'an', 'the'], correct: 'an', voc: 'have = têm | elephant = elefante | two = dois | tigers = tigres' },
    { q: '9. Change to plural: The green ______ are falling. (leaf)', options: ['leafs', 'leaves', 'leaveses'], correct: 'leaves', voc: 'green = verdes | are falling = estão caindo' },
    { q: '10. Change to plural: Two ______ are talking. (woman)', options: ['woman', 'womans', 'women'], correct: 'women', voc: 'Two = duas | are talking = estão conversando' }
  ];

  dadosLacunas.forEach(function(itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
        .setHelpText('Selecione a opção correta. | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
    
    var choices = itemData.options.map(function(opt) {
      return item.createChoice(opt, opt === itemData.correct);
    });
    item.setChoices(choices);
  });

  // --- Tradução PT para EN (Questões 11 a 18) ---
  var dadosTraducaoPT_EN = [
    { num: '11', pt: 'Ele come uma maçã todos os dias.', options: ['He eats a apple every day.', 'He eats an apple every day.', 'He eat an apple every day.'], correct: 'He eats an apple every day.', voc: 'Come = eats | Maçã = apple | Todos os dias = every day' },
    { num: '12', pt: 'A terra é redonda.', options: ['The earth is round.', 'An earth is round.', 'A earth is round.'], correct: 'The earth is round.', voc: 'Terra = earth | Redonda = round' },
    { num: '13', pt: 'Este é um jogo difícil.', options: ['This is a difficult game.', 'This is an difficult game.', 'This is difficult game.'], correct: 'This is a difficult game.', voc: 'Este é = This is | Jogo = game | Difícil = difficult' },
    { num: '14', pt: 'O gato está debaixo do carro.', options: ['The cat is under the car.', 'A cat is under the car.', 'The cat is under a car.'], correct: 'The cat is under the car.', voc: 'Gato = cat | Debaixo do = under the | Carro = car' },
    { num: '15', pt: 'Eu preciso de uma resposta rápida.', options: ['I need a quick answer.', 'I need an quick answer.', 'I need quick answer.'], correct: 'I need a quick answer.', voc: 'Eu preciso de = I need | Rápida = quick | Resposta = answer' },
    { num: '16', pt: 'As portas estão abertas.', options: ['The door is open.', 'A doors are open.', 'The doors are open.'], correct: 'The doors are open.', voc: 'Portas = doors | Abertas = open' },
    { num: '17', pt: 'Eles construíram um hotel antigo.', options: ['They built an old hotel.', 'They built a old hotel.', 'They build an old hotel.'], correct: 'They built an old hotel.', voc: 'Construíram = built | Antigo = old | Hotel = hotel' },
    { num: '18', pt: 'Meus dentes estão limpos.', options: ['My tooths are clean.', 'My teeth is clean.', 'My teeth are clean.'], correct: 'My teeth are clean.', voc: 'Dentes = teeth | Limpos = clean' }
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Selecione a tradução correta. | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
    
    var choices = itemData.options.map(function(opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  // --- Tradução EN para PT (Questões 19 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '19', en: 'The children need a safe place.', options: ['As crianças precisam de um lugar seguro.', 'A criança precisa de um lugar seguro.', 'As crianças precisa de um lugar seguro.'], correct: 'As crianças precisam de um lugar seguro.', voc: 'Children = crianças | Need = precisam | Safe = seguro | Place = lugar' },
    { num: '20', en: 'She is an English teacher.', options: ['Ela é um professora de inglês.', 'Ela é uma professora de inglês.', 'Ela é professora de inglês.'], correct: 'Ela é uma professora de inglês.', voc: 'Teacher = professora | English = inglês' },
    { num: '21', en: 'The students are studying for the test.', options: ['Os estudantes estão estudando para a prova.', 'O estudante está estudando para a prova.', 'Os estudantes estão estudando prova.'], correct: 'Os estudantes estão estudando para a prova.', voc: 'Students = estudantes | Studying = estudando | Test = prova' },
    { num: '22', en: 'We visited an interesting museum.', options: ['Nós visitamos um museu interessante.', 'Nós visitamos museu interessante.', 'Nós visitou um museu interessante.'], correct: 'Nós visitamos um museu interessante.', voc: 'Visited = visitamos | Interesting = interessante | Museum = museum' },
    { num: '23', en: 'The water in the bottle is cold.', options: ['As águas na garrafa estão frias.', 'A água na garrafa está fria.', 'A água na garrafa está quente.'], correct: 'A água na garrafa está fria.', voc: 'Water = água | Bottle = garrafa | Cold = fria' },
    { num: '24', en: 'He needs a new car.', options: ['Ele precisa de um carro novo.', 'Ele precisa de um novo carros.', 'Ele precisam de um carro novo.'], correct: 'Ele precisa de um carro novo.', voc: 'Needs = precisa | New = novo | Car = carro' },
    { num: '25', en: 'They have a big garden.', options: ['Eles têm um jardim grande.', 'Eles tem um jardim grande.', 'Eles têm um grande jardins.'], correct: 'Eles têm um jardim grande.', voc: 'Have = têm | Big = grande | Garden = jardim' }
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Selecione a tradução correta. | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
    
    var choices = itemData.options.map(function(opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  Logger.log('Formulário de Lição de Casa 12A criado. URL: ' + form.getEditUrl());
}
