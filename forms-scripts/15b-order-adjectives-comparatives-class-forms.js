function criarFormularioOrderComparativesClass() {
  var form = FormApp.create('15b - Aula: Ordem dos Adjetivos e Comparativos');
  form.setIsQuiz(true);
  form.setDescription('Responda às 25 questões de fixação sobre empilhamento/ordem dos adjetivos e estruturas comparativas e superlativas em inglês.');

  // --- Ordem dos Adjetivos & Comparativos (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Escolha a frase com a ORDEM CORRETA dos adjetivos (Opinião + Idade + Origem):', options: ['It is a beautiful old Italian car.', 'It is an Italian beautiful old car.', 'It is an old Italian beautiful car.'], correct: 'It is a beautiful old Italian car.', voc: 'beautiful = opinião | old = idade | Italian = origem' },
    { q: '2. Complete a estrutura comparativa de superioridade: "This book is ______ (interessante) than that one."', options: ['more interesting', 'most interesting', 'as interesting'], correct: 'more interesting', voc: 'more... than = mais... do que | interesting = interessante' },
    { q: '3. Complete a igualdade: "He is ______ (tão alto quanto) his brother."', options: ['as tall as', 'more tall than', 'the tallest as'], correct: 'as tall as', voc: 'as... as = tão... quanto | tall = alto' },
    { q: '4. Complete o superlativo: "She is ______ (a mais inteligente) student in class."', options: ['the most intelligent', 'more intelligent', 'as intelligent as'], correct: 'the most intelligent', voc: 'the most... = a mais... | intelligent = inteligente' },
    { q: '5. Escolha a ordem correta (Tamanho + Cor):', options: ['a big red house', 'a red big house', 'big a red house'], correct: 'a big red house', voc: 'big = tamanho | red = cor | house = casa' }
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
    { q: '6. This car is ______ (mais caro do que) mine.', options: ['more expensive than', 'as expensive as', 'the most expensive'], correct: 'more expensive than', voc: 'expensive = caro | mine = o meu' },
    { q: '7. English is ______ (tão fácil quanto) Spanish.', options: ['as easy as', 'more easy than', 'easiest than'], correct: 'as easy as', voc: 'easy = fácil | Spanish = espanhol' },
    { q: '8. Tokyo is ______ (a cidade mais cara) in the region.', options: ['the most expensive city', 'more expensive city than', 'as expensive city as'], correct: 'the most expensive city', voc: 'city = cidade | expensive = cara' },
    { q: '9. She bought a ______ (lindo, pequeno, novo) handbag.', options: ['beautiful small new', 'small new beautiful', 'new beautiful small'], correct: 'beautiful small new', voc: 'beautiful (opinião) + small (tamanho) + new (idade)' },
    { q: '10. My house is ______ (maior do que) yours.', options: ['bigger than', 'more big than', 'as big than'], correct: 'bigger than', voc: 'bigger than = maior do que | yours = a sua' }
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
    { q: '11. Qual é a ordem padrão dos adjetivos em inglês quando empilhamos vários antes do nome?', options: ['Opinião -> Tamanho -> Idade -> Cor -> Origem', 'Origem -> Cor -> Tamanho -> Opinião', 'Tamanho -> Origem -> Opinião -> Cor'], correct: 'Opinião -> Tamanho -> Idade -> Cor -> Origem', voc: 'OSASCOMP = regras de ordem dos adjetivos' },
    { q: '12. Para adjetivos curtos (ex: tall, fast), como formamos o comparativo de superioridade?', options: ['Adicionamos -er ao adjetivo + than (ex: taller than).', 'Usamos sempre a palavra "more" antes (ex: more tall).', 'Usamos a palavra "as" depois (ex: tall as).'], correct: 'Adicionamos -er ao adjetivo + than (ex: taller than).', voc: 'taller than = mais alto do que' },
    { q: '13. Para adjetivos longos (ex: expensive, beautiful), como formamos o comparativo?', options: ['Usamos "more + adjetivo + than" (ex: more expensive than).', 'Adicionamos -er ao final (ex: expensiver than).', 'Usamos apenas the most.'], correct: 'Usamos "more + adjetivo + than" (ex: more expensive than).', voc: 'more expensive than = mais caro do que' },
    { q: '14. Qual estrutura usamos para comparar coisas IGUAIS ("tão... quanto")?', options: ['as + adjetivo + as (ex: as fast as)', 'more + adjetivo + than', 'the most + adjetivo'], correct: 'as + adjetivo + as (ex: as fast as)', voc: 'as fast as = tão rápido quanto' },
    { q: '15. O que significa "the most expensive"?', options: ['O mais caro (superlativo)', 'Mais caro do que (comparativo)', 'Tão caro quanto (igualdade)'], correct: 'O mais caro (superlativo)', voc: 'the most = o/a mais' }
  ];

  dadosGrupoC.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
      .setHelpText('Responda à questão de regra. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  // --- Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    { num: '16', pt: 'É uma cidade linda, antiga e grande.', options: ['It is a beautiful, big, old city.', 'It is a city old big beautiful.', 'It is an old city big beautiful.'], correct: 'It is a beautiful, big, old city.', voc: 'beautiful = linda | big = grande | old = antiga' },
    { num: '17', pt: 'Este carro é mais caro do que o meu.', options: ['This car is more expensive than mine.', 'This car is expensive than mine.', 'This car is as expensive mine.'], correct: 'This car is more expensive than mine.', voc: 'more expensive than = mais caro do que | mine = o meu' },
    { num: '18', pt: 'Ela é tão rápida quanto o irmão dela.', options: ['She is as fast as her brother.', 'She is more fast than her brother.', 'She is fast as her brother.'], correct: 'She is as fast as her brother.', voc: 'as fast as = tão rápida quanto | her brother = o irmão dela' },
    { num: '19', pt: 'Este é o lugar mais bonito do mundo.', options: ['This is the most beautiful place in the world.', 'This is more beautiful place than world.', 'This is as beautiful place as world.'], correct: 'This is the most beautiful place in the world.', voc: 'the most beautiful = o mais bonito | place = lugar' },
    { num: '20', pt: 'São Francisco é mais fria do que Miami.', options: ['San Francisco is colder than Miami.', 'San Francisco is more cold than Miami.', 'San Francisco is as cold Miami.'], correct: 'San Francisco is colder than Miami.', voc: 'colder than = mais fria do que' }
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
    { num: '21', en: 'It is a beautiful, old, big city, and it is more expensive than mine.', options: ['É uma cidade linda, grande e antiga, e é mais cara do que a minha.', 'É uma cidade feia e pequena, mas é mais barata.', 'É uma cidade nova e grande.'], correct: 'É uma cidade linda, grande e antiga, e é mais cara do que a minha.', voc: 'beautiful = linda | old = antiga | big = grande | expensive = cara' },
    { num: '22', en: 'Gold is more precious than silver.', options: ['Ouro é mais precioso do que prata.', 'Ouro é tão precioso quanto prata.', 'Prata é mais preciosa do que ouro.'], correct: 'Ouro é mais precioso do que prata.', voc: 'gold = ouro | precious = precioso | silver = prata' },
    { num: '23', en: 'He is as smart as his father.', options: ['Ele é tão inteligente quanto o pai dele.', 'Ele é mais inteligente do que o pai dele.', 'O pai dele é mais inteligente.'], correct: 'Ele é tão inteligente quanto o pai dele.', voc: 'as smart as = tão inteligente quanto' },
    { num: '24', en: 'This is the most popular song of the year.', options: ['Esta é a música mais popular do ano.', 'Esta música é mais popular do que aquela.', 'Esta música é tão popular quanto a do ano passado.'], correct: 'Esta é a música mais popular do ano.', voc: 'the most popular = a mais popular | song = música | year = ano' },
    { num: '25', en: 'Plane tickets are more expensive in July.', options: ['Passagens de avião são mais caras em julho.', 'Passagens de avião são mais baratas em julho.', 'Passagens de avião são tão baratas em julho.'], correct: 'Passagens de avião são mais caras em julho.', voc: 'tickets = passagens | expensive = caras | July = julho' }
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

  Logger.log('Formulário de Aula 15b criado com sucesso! URL: ' + form.getEditUrl());
}
