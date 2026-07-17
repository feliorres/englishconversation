function criarFormularioLiteraryTranslationClass() {
  var form = FormApp.create('13b - Aula: Tradução Literária (The Happy Prince)');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões de vocabulário e tradução baseadas no excerto de "The Happy Prince" praticadas em classe.');

  // --- Complete as Lacunas / Vocabulário (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. "High above the city, on a tall column, stood the statue..." What is a "column"?', options: ['A vertical pillar or post', 'A horizontal table', 'A small river'], correct: 'A vertical pillar or post', voc: 'pillar = pilar | post = poste' },
    { q: '2. Complete: The statue was ______ all over with thin leaves of fine gold. (folheada a ouro)', options: ['gilded', 'guilded', 'gilted'], correct: 'gilded', voc: 'gilded = folheado a ouro' },
    { q: '3. What is the singular form of "leaves" (folhas)?', options: ['leafs', 'leaf', 'leave'], correct: 'leaf', voc: 'leaves = folhas | leaf = folha' },
    { q: '4. Complete: For eyes he had two bright ______.', options: ['sapphires', 'rubies', 'diamonds'], correct: 'sapphires', voc: 'sapphires = safiras' },
    { q: '5. A large red ______ glowed on his sword-hilt.', options: ['ruby', 'emerald', 'sapphire'], correct: 'ruby', voc: 'ruby = rubi | glowed = brilhava' },
    { q: '6. What is a "sword-hilt"?', options: ['The blade of a sword', 'The handle or grip of a sword', 'The metal shield'], correct: 'The handle or grip of a sword', voc: 'handle/grip = cabo/punho | shield = escudo' },
    { q: '7. Complete: High ______ the city, stood the statue. (no alto de / acima de)', options: ['above', 'under', 'between'], correct: 'above', voc: 'above = acima de / no alto de' },
    { q: '8. Which word in the text means "folheado / dourado"?', options: ['gilded', 'glowed', 'bright'], correct: 'gilded', voc: 'gilded = folheado | glowed = reluzia' },
    { q: '9. Which word in the text means "brilhava / reluzia"?', options: ['gilded', 'glowed', 'stood'], correct: 'glowed', voc: 'glowed = brilhava | stood = erguia-se' },
    { q: '10. Complete: He was gilded all over with thin ______ of fine gold. (folhas)', options: ['leaves', 'leafs', 'leaf'], correct: 'leaves', voc: 'thin = finas | gold = ouro' }
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
    { num: '11', pt: 'A estátua erguia-se sobre uma coluna alta.', options: ['The statue stood on a tall column.', 'The statue stood in a tall column.', 'The statue stands under a tall column.'], correct: 'The statue stood on a tall column.', voc: 'Estátua = statue | Erguia-se = stood | Sobre = on | Coluna alta = tall column' },
    { num: '12', pt: 'Ele era todo folheado a ouro fino.', options: ['He was gilded all over with fine gold.', 'He is gilded all over with fine gold.', 'He was guilded all over with thin gold.'], correct: 'He was gilded all over with fine gold.', voc: 'Ele era = He was | Folheado = gilded | Todo = all over | Ouro fino = fine gold' },
    { num: '13', pt: 'Ele tinha duas brilhantes safiras no lugar dos olhos.', options: ['He had two bright sapphires for eyes.', 'He has two brights sapphires for eyes.', 'He had two bright sapphires for eye.'], correct: 'He had two bright sapphires for eyes.', voc: 'Tinha = had | Duas = two | Brilhantes = bright | Safiras = sapphires | No lugar dos olhos = for eyes' },
    { num: '14', pt: 'Um grande rubi vermelho brilhava na espada.', options: ['A large red ruby glowed on the sword.', 'A large reds rubies glowed on the sword.', 'A big red ruby glow on the sword.'], correct: 'A large red ruby glowed on the sword.', voc: 'Grande = large | Vermelho = red | Rubi = ruby | Brilhava = glowed | Espada = sword' },
    { num: '15', pt: 'A cidade é muito bonita no alto.', options: ['The city is very beautiful from high above.', 'The city is very beautiful under high above.', 'A city is very beautiful from high above.'], correct: 'The city is very beautiful from high above.', voc: 'Cidade = city | Bonita = beautiful | No alto = high above' },
    { num: '16', pt: 'Eles encontraram algumas folhas de ouro.', options: ['They found some leaves of gold.', 'They found some leafs of gold.', 'They find some leave of gold.'], correct: 'They found some leaves of gold.', voc: 'Encontraram = found | Algumas folhas = some leaves | Ouro = gold' },
    { num: '17', pt: 'A espada tem um cabo bonito.', options: ['The sword has a beautiful hilt.', 'The sword have a beautiful hilt.', 'The swords has beautiful hilts.'], correct: 'The sword has a beautiful hilt.', voc: 'Espada = sword | Cabo = hilt | Bonito = beautiful' },
    { num: '18', pt: 'O príncipe estava feliz.', options: ['The prince was happy.', 'The prince is happy.', 'A prince was happy.'], correct: 'The prince was happy.', voc: 'Príncipe = prince | Estava = was | Feliz = happy' }
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
    { num: '19', en: 'High above the city stood the statue.', options: ['No alto da cidade erguia-se a estátua.', 'Debaixo da cidade erguia-se a estátua.', 'A estátua caiu no alto da cidade.'], correct: 'No alto da cidade erguia-se a estátua.', voc: 'High above = no alto de | Stood = erguia-se | Statue = estátua' },
    { num: '20', en: 'He was gilded all over with gold.', options: ['Ele era todo folheado a ouro.', 'Ele estava coberto de prata.', 'Ele pintou tudo de dourado.'], correct: 'Ele era todo folheado a ouro.', voc: 'Gilded = folheado | All over = todo / por toda parte | Gold = ouro' },
    { num: '21', en: 'She has two bright sapphires.', options: ['Ela tem duas brilhantes safiras.', 'Ela tem duas safiras escuras.', 'Ela tinha dois rubis brilhantes.'], correct: 'Ela tem duas brilhantes safiras.', voc: 'Has = tem | Bright = brilhantes | Sapphires = safiras' },
    { num: '22', en: 'A ruby glowed on his sword-hilt.', options: ['Um rubi brilhava no punho de sua espada.', 'Um rubi caiu da sua espada.', 'Uma safira brilhava no punho da espada.'], correct: 'Um rubi brilhava no punho de sua espada.', voc: 'Ruby = rubi | Glowed = brilhava | Sword-hilt = punho da espada' },
    { num: '23', en: 'The leaves of the tree are green.', options: ['As folhas da árvore são verdes.', 'A folha da árvore é verde.', 'As árvores têm muitas folhas verdes.'], correct: 'As folhas da árvore são verdes.', voc: 'Leaves = folhas | Tree = árvore | Green = verdes' },
    { num: '24', en: 'Dorothy looked at the tall column.', options: ['Dorothy olhou para a coluna alta.', 'Dorothy subiu na coluna alta.', 'Dorothy olhou para as colunas altas.'], correct: 'Dorothy olhou para a coluna alta.', voc: 'Looked at = olhou para | Tall = alta | Column = coluna' },
    { num: '25', en: 'The Happy Prince helped the poor people.', options: ['O Príncipe Feliz ajudou as pessoas pobres.', 'O Príncipe Feliz ajuda as pessoas ricas.', 'O Príncipe Feliz era uma pessoa pobre.'], correct: 'O Príncipe Feliz ajudou as pessoas pobres.', voc: 'Helped = ajudou | Poor = pobres | People = pessoas' }
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

  Logger.log('Formulário de Aula 13B criado. URL: ' + form.getEditUrl());
}
