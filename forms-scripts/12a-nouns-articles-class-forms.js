function criarFormularioNounsArticlesClass() {
  var form = FormApp.create('12a - Aula: Padrões de Substantivos e Artigos');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões praticadas em sala de aula.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. I see ______ dog in the street. (um - geral)', options: ['a', 'an', 'the'], correct: 'a', voc: 'see = vejo | dog = cachorro | in the street = na rua' },
    { q: '2. She is eating ______ apple. (uma - geral)', options: ['a', 'an', 'the'], correct: 'an', voc: 'is eating = está comendo | apple = maçã' },
    { q: '3. ______ sun is very bright today. (O - específico/único)', options: ['A', 'An', 'The'], correct: 'The', voc: 'sun = sol | very = muito | bright = brilhante | today = hoje' },
    { q: '4. Please hand me ______ books on that table. (os - específico)', options: ['a', 'an', 'the'], correct: 'the', voc: 'Please = por favor | hand me = entregue-me | books = livros | on that table = naquela mesa' },
    { q: '5. Change to plural: My ______ are dirty. (child)', options: ['childs', 'children', 'childrens'], correct: 'children', voc: 'are = estão | dirty = sujos' },
    { q: '6. He wants to buy ______ new house. (uma - geral)', options: ['a', 'an', 'the'], correct: 'a', voc: 'wants = quer | to buy = comprar | new = nova | house = casa' },
    { q: '7. We need to wait for ______ hour. (uma - som de vogal)', options: ['a', 'an', 'the'], correct: 'an', voc: 'need = precisamos | to wait for = esperar por | hour = hora' },
    { q: '8. Look at ______ moon tonight! (a - único)', options: ['a', 'an', 'the'], correct: 'the', voc: 'Look at = olhe para | moon = lua | tonight = hoje à noite' },
    { q: '9. Change to plural: The ______ are playing outside. (boy)', options: ['boys', 'boies', 'boys\'s'], correct: 'boys', voc: 'are playing = estão brincando | outside = lá fora' },
    { q: '10. Change to plural: We have three ______ in the office. (box)', options: ['boxs', 'boxes', 'boxies'], correct: 'boxes', voc: 'have = temos | three = três | in the office = no escritório' }
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
    { num: '11', pt: 'Eu tenho uma ideia interessante.', options: ['I have a interesting idea.', 'I have an interesting idea.', 'I have the interesting idea.'], correct: 'I have an interesting idea.', voc: 'Eu tenho = I have | Ideia = idea | Interessante = interesting' },
    { num: '12', pt: 'O céu está azul hoje.', options: ['The sky is blue today.', 'A sky is blue today.', 'Sky is blue today.'], correct: 'The sky is blue today.', voc: 'Céu = sky | Azul = blue | Hoje = today' },
    { num: '13', pt: 'Ela é uma médica excelente.', options: ['She is a excellent doctor.', 'She is an excellent doctor.', 'She is excellent doctor.'], correct: 'She is an excellent doctor.', voc: 'Excelente = excellent | Médica = doctor' },
    { num: '14', pt: 'Eu vejo três carros pretos.', options: ['I see three black cars.', 'I see three cars blacks.', 'I see three black car.'], correct: 'I see three black cars.', voc: 'Vejo = see | Três = three | Carros = cars | Pretos = black' },
    { num: '15', pt: 'Eles são homens bons.', options: ['They are good mans.', 'They are good mens.', 'They are good men.'], correct: 'They are good men.', voc: 'Bons = good | Homens = men' },
    { num: '16', pt: 'Onde estão as chaves?', options: ['Where are the key?', 'Where is the keys?', 'Where are the keys?'], correct: 'Where are the keys? ', voc: 'Onde estão = Where are | Chaves = keys' },
    { num: '17', pt: 'Eu moro em uma cidade pequena.', options: ['I live in an small city.', 'I live in a small city.', 'I live in small city.'], correct: 'I live in a small city.', voc: 'Moro = live | Em = in | Cidade = city | Pequena = small' },
    { num: '18', pt: 'Duas mulheres estão na sala.', options: ['Two women are in the room.', 'Two womans are in the room.', 'Two women is in the room.'], correct: 'Two women are in the room.', voc: 'Duas = two | Mulheres = women | Na sala = in the room' }
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
    { num: '19', en: 'The children are in the park.', options: ['As crianças estão no parque.', 'A criança está no parque.', 'As crianças estão no jardim.'], correct: 'As crianças estão no parque.', voc: 'Children = crianças | Park = parque' },
    { num: '20', en: 'It is an honor to meet you.', options: ['É um honra conhecer você.', 'É uma honra conhecer você.', 'Isto é honra conhecer você.'], correct: 'É uma honra conhecer você.', voc: 'Honor = honra | To meet you = conhecer você' },
    { num: '21', en: 'We need a new computer.', options: ['Nós precisamos computador novo.', 'Nós precisamos de um computador novo.', 'Nós precisamos de um novo computadores.'], correct: 'Nós precisamos de um computador novo.', voc: 'Need = precisamos | New = novo | Computer = computador' },
    { num: '22', en: 'The keys are under the bed.', options: ['A chave está debaixo da cama.', 'As chaves estão sobre a cama.', 'As chaves estão debaixo da cama.'], correct: 'As chaves estão debaixo da cama.', voc: 'Keys = chaves | Under = debaixo de / da | Bed = cama' },
    { num: '23', en: 'He bought a big umbrella.', options: ['Ele comprou uma guarda-chuva grande.', 'Ele comprou um guarda-chuva grande.', 'Ele comprou um guarda-chuva pequeno.'], correct: 'Ele comprou um guarda-chuva grande.', voc: 'Bought = comprou | Big = grande | Umbrella = guarda-chuva' },
    { num: '24', en: 'She is an honest person.', options: ['Ela é um pessoa honesta.', 'Ela é uma pessoa honesta.', 'Ela é honesto pessoa.'], correct: 'Ela é uma pessoa honesta.', voc: 'Honest = honesta | Person = pessoa' },
    { num: '25', en: 'My brother has three dogs.', options: ['Meu irmão tem três cachorro.', 'Meus irmãos têm três cachorros.', 'Meu irmão tem três cachorros.'], correct: 'Meu irmão tem três cachorros.', voc: 'Brother = irmão | Has = tem | Three = três | Dogs = cachorros' }
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

  Logger.log('Formulário de Aula 12A criado. URL: ' + form.getEditUrl());
}
