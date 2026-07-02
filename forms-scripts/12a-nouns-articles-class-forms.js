function criarFormularioNounsArticlesClass() {
  var form = FormApp.create('12a - Aula: Padrões de Substantivos e Artigos');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões praticadas em sala de aula.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. I see ______ dog in the street. (um - geral)', voc: 'see = vejo | dog = cachorro | in the street = na rua' },
    { q: '2. She is eating ______ apple. (uma - geral)', voc: 'is eating = está comendo | apple = maçã' },
    { q: '3. ______ sun is very bright today. (O - específico/único)', voc: 'sun = sol | very = muito | bright = brilhante | today = hoje' },
    { q: '4. Please hand me ______ books on that table. (os - específico)', voc: 'Please = por favor | hand me = entregue-me | books = livros | on that table = naquela mesa' },
    { q: '5. Change to plural: My ______ are dirty. (child)', voc: 'are = estão | dirty = sujos' },
    { q: '6. He wants to buy ______ new house. (uma - geral)', voc: 'wants = quer | to buy = comprar | new = nova | house = casa' },
    { q: '7. We need to wait for ______ hour. (uma - som de vogal)', voc: 'need = precisamos | to wait for = esperar por | hour = hora' },
    { q: '8. Look at ______ moon tonight! (a - único)', voc: 'Look at = olhe para | moon = lua | tonight = hoje à noite' },
    { q: '9. Change to plural: The ______ are playing outside. (boy)', voc: 'are playing = estão brincando | outside = lá fora' },
    { q: '10. Change to plural: We have three ______ in the office. (box)', voc: 'have = temos | three = três | in the office = no escritório' }
  ];

  dadosLacunas.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com o artigo correto (a, an, the) ou o plural indicado. | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- Tradução PT para EN (Questões 11 a 18) ---
  var dadosTraducaoPT_EN = [
    { num: '11', pt: 'Eu tenho uma ideia interessante.', voc: 'Eu tenho = I have | Ideia = idea | Interessante = interesting' },
    { num: '12', pt: 'O céu está azul hoje.', voc: 'Céu = sky | Azul = blue | Hoje = today' },
    { num: '13', pt: 'Ela é uma médica excelente.', voc: 'Excelente = excellent | Médica = doctor' },
    { num: '14', pt: 'Eu vejo três carros pretos.', voc: 'Vejo = see | Três = three | Carros = cars | Pretos = black' },
    { num: '15', pt: 'Eles são homens bons.', voc: 'Bons = good | Homens = men' },
    { num: '16', pt: 'Onde estão as chaves?', voc: 'Onde estão = Where are | Chaves = keys' },
    { num: '17', pt: 'Eu moro em uma cidade pequena.', voc: 'Moro = live | Em = in | Cidade = city | Pequena = small' },
    { num: '18', pt: 'Duas mulheres estão na sala.', voc: 'Duas = two | Mulheres = women | Na sala = in the room' }
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- Tradução EN para PT (Questões 19 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '19', en: 'The children are in the park.', voc: 'Children = crianças | Park = parque' },
    { num: '20', en: 'It is an honor to meet you.', voc: 'Honor = honra | To meet you = conhecer você' },
    { num: '21', en: 'We need a new computer.', voc: 'Need = precisamos | New = novo | Computer = computador' },
    { num: '22', en: 'The keys are under the bed.', voc: 'Keys = chaves | Under = debaixo de / da | Bed = cama' },
    { num: '23', en: 'He bought a big umbrella.', voc: 'Bought = comprou | Big = grande | Umbrella = guarda-chuva' },
    { num: '24', en: 'She is an honest person.', voc: 'Honest = honesta | Person = pessoa' },
    { num: '25', en: 'My brother has three dogs.', voc: 'Brother = irmão | Has = tem | Three = três | Dogs = cachorros' }
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Aula 12A criado. URL: ' + form.getEditUrl());
}
