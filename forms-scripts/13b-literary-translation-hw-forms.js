function criarFormularioLiteraryTranslationHW() {
  var form = FormApp.create('13b - Lição de Casa: Tradução Literária (The Happy Prince)');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Todas as questões são obrigatórias e baseadas no vocabulário de "The Happy Prince".');

  // --- Complete as Lacunas / Vocabulário (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. Complete: In the city, there is a tall ______ with a statue. (coluna)', options: ['column', 'colum', 'collumn'], correct: 'column', voc: 'city = cidade | tall = alta | statue = estátua' },
    { q: '2. What is the meaning of "fine gold" in the text?', options: ['Pure or high-quality gold', 'Very thin gold wire', 'Cheap gold paint'], correct: 'Pure or high-quality gold', voc: 'pure = puro | high-quality = alta qualidade' },
    { q: '3. Complete: The wind blew the dry ______ away. (folhas - plural de leaf)', options: ['leafs', 'leaves', 'leafes'], correct: 'leaves', voc: 'wind = vento | blew away = soprou para longe | dry = secas' },
    { q: '4. Complete: Her blue eyes looked like beautiful ______. (safiras)', options: ['sapphires', 'rubies', 'pearls'], correct: 'sapphires', voc: 'looked like = pareciam com | blue eyes = olhos azuis' },
    { q: '5. Complete: The red ______ in the necklace is worth a fortune. (rubi)', options: ['ruby', 'sapphire', 'diamond'], correct: 'ruby', voc: 'necklace = colar | worth = vale | fortune = fortuna' },
    { q: '6. Complete: He gripped the ______ of the ancient sword. (punho/cabo)', options: ['hilt', 'blade', 'sheath'], correct: 'hilt', voc: 'gripped = segurou firme | ancient = antiga | sword = espada' },
    { q: '7. Complete: A bird was flying high ______ the mountains. (acima de / no alto de)', options: ['above', 'under', 'inside'], correct: 'above', voc: 'flying = voando | mountains = montanhas' },
    { q: '8. Which word is a synonym for "covered in gold" (coberto de ouro)?', options: ['gilded', 'glowed', 'stood'], correct: 'gilded', voc: 'synonym = sinônimo | covered = coberto' },
    { q: '9. Complete: The candle ______ in the dark room. (brilhou/reluziu)', options: ['glowed', 'gilded', 'stood'], correct: 'glowed', voc: 'candle = vela | dark room = sala escura' },
    { q: '10. Complete: The golden ______ are shining in the sun. (folhas - plural)', options: ['leaves', 'leafs', 'leaf'], correct: 'leaves', voc: 'golden = de ouro | shining = brilhando | sun = sol' }
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
    { num: '11', pt: 'O pássaro voou acima da coluna.', options: ['The bird flew above the column.', 'The bird flies above the column.', 'The bird flew under the column.'], correct: 'The bird flew above the column.', voc: 'Pássaro = bird | Voou = flew | Acima da = above the | Coluna = column' },
    { num: '12', pt: 'Ela comprou um anel de safira brilhante.', options: ['She bought a bright sapphire ring.', 'She bought a brights sapphires ring.', 'She buy a bright sapphire ring.'], correct: 'She bought a bright sapphire ring.', voc: 'Comprou = bought | Anel = ring | Safira = sapphire | Brilhante = bright' },
    { num: '13', pt: 'O punho da espada era feito de ouro.', options: ['The sword-hilt was made of gold.', 'The sword-hilt is made of gold.', 'The sword blade was made of gold.'], correct: 'The sword-hilt was made of gold.', voc: 'Punho da espada = sword-hilt | Era feito de = was made of | Ouro = gold' },
    { num: '14', pt: 'Várias folhas caíram no chão.', options: ['Several leaves fell on the ground.', 'Several leafs fell on the ground.', 'Several leave fell on the ground.'], correct: 'Several leaves fell on the ground.', voc: 'Várias = several | Folhas = leaves | Caíram = fell | Chão = ground' },
    { num: '15', pt: 'O grande rubi vermelho é muito caro.', options: ['The large red ruby is very expensive.', 'The large red ruby was very expensive.', 'A big red ruby are very expensive.'], correct: 'The large red ruby is very expensive.', voc: 'Grande = large | Vermelho = red | Rubi = ruby | Caro = expensive' },
    { num: '16', pt: 'A estátua de ouro brilhava no sol.', options: ['The gold statue glowed in the sun.', 'The gold statue gild in the sun.', 'The gold statue stands in the sun.'], correct: 'The gold statue glowed in the sun.', voc: 'Estátua de ouro = gold statue | Brilhava = glowed | No sol = in the sun' },
    { num: '17', pt: 'Nós moramos em uma cidade grande.', options: ['We live in a large city.', 'We live in a large column.', 'We lives in a large city.'], correct: 'We live in a large city.', voc: 'Moramos = live | Em uma = in a | Grande = large | Cidade = city' },
    { num: '18', pt: 'O Príncipe Feliz tinha um bom coração.', options: ['The Happy Prince had a good heart.', 'The Happy Prince has a good heart.', 'A Happy Prince had a good heart.'], correct: 'The Happy Prince had a good heart.', voc: 'Príncipe Feliz = Happy Prince | Tinha = had | Bom coração = good heart' }
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
    { num: '19', en: 'A bird flew high above the city.', options: ['Um pássaro voou no alto da cidade.', 'Um pássaro voou debaixo da cidade.', 'Os pássaros voaram no alto da cidade.'], correct: 'Um pássaro voou no alto da cidade.', voc: 'Bird = pássaro | Flew = voou | High above = no alto de | City = cidade' },
    { num: '20', en: 'The ring was made of fine gold.', options: ['O anel era feito de ouro fino.', 'O anel é feito de ouro fino.', 'A aliança foi feita de prata fina.'], correct: 'O anel era feito de ouro fino.', voc: 'Ring = anel | Was made of = era feito de | Fine gold = ouro fino' },
    { num: '21', en: 'She has two beautiful rubies.', options: ['Ela tem dois rubis lindos.', 'Ela tem duas safiras lindas.', 'Ela tinha dois rubis lindos.'], correct: 'Ela tem dois rubis lindos.', voc: 'Has = tem | Beautiful = lindos | Rubies = rubis' },
    { num: '22', en: 'The sword-hilt was decorated with sapphires.', options: ['O punho da espada estava decorado com safiras.', 'A lâmina da espada estava decorada com safiras.', 'O cabo da espada é decorado com rubis.'], correct: 'O punho da espada estava decorado com safiras.', voc: 'Sword-hilt = punho da espada | Decorated = decorado | Sapphires = safiras' },
    { num: '23', en: 'Green leaves are growing on the trees.', options: ['Folhas verdes estão crescendo nas árvores.', 'Folhas verdes crescem na árvore.', 'Uma folha verde está crescendo na árvore.'], correct: 'Folhas verdes estão crescendo nas árvores.', voc: 'Green = verdes | Leaves = folhas | Growing = crescendo | Trees = árvores' },
    { num: '24', en: 'They stood near the ancient column.', options: ['Eles ficaram de pé perto da coluna antiga.', 'Eles subiram na coluna antiga.', 'Eles olharam para a coluna antiga.'], correct: 'Eles ficaram de pé perto da coluna antiga.', voc: 'Stood = ficaram de pé / ergueram-se | Near = perto de | Ancient = antiga | Column = coluna' },
    { num: '25', en: 'The statue was gilded with thin gold.', options: ['A estátua era folheada com ouro fino.', 'A estátua foi pintada com tinta dourada.', 'O monumento era feito de ouro puro.'], correct: 'A estátua era folheada com ouro fino.', voc: 'Statue = estátua | Gilded = folheada | Thin gold = ouro fino/fino' }
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

  Logger.log('Formulário de Lição de Casa 13B criado. URL: ' + form.getEditUrl());
}
