function criarFormularioNounsArticlesHW() {
  var form = FormApp.create('12a - Lição de casa: Padrões de Substantivos e Artigos');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Todas as questões são obrigatórias e dissertativas.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. Do you want ______ orange? (uma - geral)', voc: 'Do you want = você quer | orange = laranja' },
    { q: '2. They live in ______ small apartment. (um - geral)', voc: 'live = moram | small = pequeno | apartment = apartamento' },
    { q: '3. ______ earth goes around the sun. (A - único)', voc: 'earth = terra | goes around = gira em torno do | sun = sol' },
    { q: '4. Change to plural: How many ______ live here? (person)', voc: 'How many = quantos/quantas | live here = moram aqui' },
    { q: '5. Change to plural: Those ______ look friendly. (man)', voc: 'Those = aqueles | look = parecem | friendly = amigáveis' },
    { q: '6. My uncle is ______ university student. (um - som /ju/)', voc: 'My uncle = meu tio | university = universitário | student = estudante' },
    { q: '7. I want to read ______ book on your desk. (o - específico)', voc: 'want to read = quero ler | book = livro | on your desk = na sua mesa' },
    { q: '8. They have ______ elephant and two tigers. (um - geral)', voc: 'have = têm | elephant = elefante | two = dois | tigers = tigres' },
    { q: '9. Change to plural: The green ______ are falling. (leaf)', voc: 'green = verdes | are falling = estão caindo' },
    { q: '10. Change to plural: Two ______ are talking. (woman)', voc: 'Two = duas | are talking = estão conversando' }
  ];

  dadosLacunas.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com o artigo correto (a, an, the) ou o plural indicado. | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- Tradução PT para EN (Questões 11 a 18) ---
  var dadosTraducaoPT_EN = [
    { num: '11', pt: 'Ele come uma maçã todos os dias.', voc: 'Come = eats | Maçã = apple | Todos os dias = every day' },
    { num: '12', pt: 'A terra é redonda.', voc: 'Terra = earth | Redonda = round' },
    { num: '13', pt: 'Este é um jogo difícil.', voc: 'Este é = This is | Jogo = game | Difícil = difficult' },
    { num: '14', pt: 'O gato está debaixo do carro.', voc: 'Gato = cat | Debaixo do = under the | Carro = car' },
    { num: '15', pt: 'Eu preciso de uma resposta rápida.', voc: 'Eu preciso de = I need | Rápida = quick | Resposta = answer' },
    { num: '16', pt: 'As portas estão abertas.', voc: 'Portas = doors | Abertas = open' },
    { num: '17', pt: 'Eles construíram um hotel antigo.', voc: 'Construíram = built | Antigo = old | Hotel = hotel' },
    { num: '18', pt: 'Meus dentes estão limpos.', voc: 'Dentes = teeth | Limpos = clean' }
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- Tradução EN para PT (Questões 19 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '19', en: 'The children need a safe place.', voc: 'Children = crianças | Need = precisam | Safe = seguro | Place = lugar' },
    { num: '20', en: 'She is an English teacher.', voc: 'Teacher = professora | English = inglês' },
    { num: '21', en: 'The students are studying for the test.', voc: 'Students = estudantes | Studying = estudando | Test = prova' },
    { num: '22', en: 'We visited an interesting museum.', voc: 'Visited = visitamos | Interesting = interessante | Museum = museu' },
    { num: '23', en: 'The water in the bottle is cold.', voc: 'Water = água | Bottle = garrafa | Cold = fria' },
    { num: '24', en: 'He needs a new car.', voc: 'Needs = precisa | New = novo | Car = carro' },
    { num: '25', en: 'They have a big garden.', voc: 'Have = têm | Big = grande | Garden = jardim' }
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Lição de Casa 12A criado. URL: ' + form.getEditUrl());
}
