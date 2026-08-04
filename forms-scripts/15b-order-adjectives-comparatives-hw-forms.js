function criarFormularioOrderComparativesHW() {
  var form = FormApp.create('15b - Homework: Ordem dos Adjetivos e Comparativos');
  form.setIsQuiz(true);
  form.setDescription('Dever de Casa: Responda às 25 questões sobre a ordem dos adjetivos e estruturas comparativas/superlativas.');

  // --- Ordem dos Adjetivos & Comparativos (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Escolha a ordem correta dos adjetivos (Opinião + Idade):', options: ['a nice young doctor', 'a young nice doctor', 'nice a young doctor'], correct: 'a nice young doctor', voc: 'nice = simpático | young = jovem | doctor = médico' },
    { q: '2. Complete com o comparativo de superioridade: "This phone is ______ (mais novo do que) that one."', options: ['newer than', 'more new than', 'as new as'], correct: 'newer than', voc: 'newer than = mais novo do que' },
    { q: '3. Complete com igualdade: "This dress is ______ (tão bonito quanto) that dress."', options: ['as pretty as', 'more pretty than', 'prettiest than'], correct: 'as pretty as', voc: 'as pretty as = tão bonito quanto' },
    { q: '4. Complete o superlativo: "He is ______ (o homem mais rico) in the city."', options: ['the richest man', 'richer man than', 'as rich man as'], correct: 'the richest man', voc: 'the richest = o mais rico | man = homem' },
    { q: '5. Escolha a ordem correta (Tamanho + Cor + Material):', options: ['a large black leather bag', 'a black large leather bag', 'a leather large black bag'], correct: 'a large black leather bag', voc: 'large (tamanho) + black (cor) + leather (material)' }
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
    { q: '6. Travelling by train is ______ (mais confortável do que) by bus.', options: ['more comfortable than', 'as comfortable as', 'most comfortable'], correct: 'more comfortable than', voc: 'comfortable = confortável | train = trem | bus = ônibus' },
    { q: '7. This movie is ______ (tão interessante quanto) the book.', options: ['as interesting as', 'more interesting than', 'most interesting than'], correct: 'as interesting as', voc: 'as... as = tão... quanto | movie = filme' },
    { q: '8. Mount Everest is ______ (a montanha mais alta) in the world.', options: ['the highest mountain', 'higher mountain than', 'as high mountain as'], correct: 'the highest mountain', voc: 'the highest = a mais alta | mountain = montanha' },
    { q: '9. She bought an ______ (linda, antiga, de madeira) table.', options: ['attractive old wooden', 'old wooden attractive', 'wooden attractive old'], correct: 'attractive old wooden', voc: 'attractive (opinião) + old (idade) + wooden (material)' },
    { q: '10. My dog is ______ (mais rápido do que) yours.', options: ['faster than', 'more fast than', 'as fast than'], correct: 'faster than', voc: 'faster than = mais rápido do que | yours = o seu' }
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
    { q: '11. Qual frase segue a ordem de adjetivos de opinião antes de fatos?', options: ['a wonderful red dress', 'a red wonderful dress', 'a dress wonderful red'], correct: 'a wonderful red dress', voc: 'wonderful = opinião | red = cor (fato)' },
    { q: '12. Como dizemos "mais fácil do que" usando o comparativo do adjetivo curto "easy"?', options: ['easier than', 'more easy than', 'easiest than'], correct: 'easier than', voc: 'easier than = mais fácil do que' },
    { q: '13. Qual é a forma correta do superlativo de "bad" (ruim)?', options: ['the worst', 'the baddest', 'more bad'], correct: 'the worst', voc: 'the worst = o pior (irregular)' },
    { q: '14. Qual é a forma correta do comparativo de "good" (bom)?', options: ['better than', 'gooder than', 'more good than'], correct: 'better than', voc: 'better than = melhor do que (irregular)' },
    { q: '15. O que significa "the most important"?', options: ['O mais importante', 'Mais importante do que', 'Tão importante quanto'], correct: 'O mais importante', voc: 'the most important = o mais importante' }
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
    { num: '16', pt: 'Este exercício é mais fácil do que o anterior.', options: ['This exercise is easier than the previous one.', 'This exercise is more easy than the previous one.', 'This exercise is as easy the previous one.'], correct: 'This exercise is easier than the previous one.', voc: 'easier than = mais fácil do que | previous one = o anterior' },
    { num: '17', pt: 'Ela é a pessoa mais inteligente do grupo.', options: ['She is the most intelligent person in the group.', 'She is more intelligent person in the group.', 'She is as intelligent person in group.'], correct: 'She is the most intelligent person in the group.', voc: 'the most intelligent = a mais inteligente | person = pessoa' },
    { num: '18', pt: 'Ele comprou uma jaqueta de couro preta linda.', options: ['He bought a beautiful black leather jacket.', 'He bought a leather black beautiful jacket.', 'He bought a black beautiful leather jacket.'], correct: 'He bought a beautiful black leather jacket.', voc: 'beautiful (opinião) + black (cor) + leather (material)' },
    { num: '19', pt: 'Meu carro é tão rápido quanto o seu.', options: ['My car is as fast as yours.', 'My car is more fast than yours.', 'My car is faster as yours.'], correct: 'My car is as fast as yours.', voc: 'as fast as = tão rápido quanto | yours = o seu' },
    { num: '20', pt: 'Hoje está mais quente do que ontem.', options: ['Today is hotter than yesterday.', 'Today is more hot than yesterday.', 'Today is as hot yesterday.'], correct: 'Today is hotter than yesterday.', voc: 'hotter than = mais quente do que | yesterday = ontem' }
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
    { num: '21', en: 'This question is more difficult than the first one.', options: ['Esta questão é mais difícil do que a primeira.', 'Esta questão é tão difícil quanto a primeira.', 'Esta questão é mais fácil do que a primeira.'], correct: 'Esta questão é mais difícil do que a primeira.', voc: 'more difficult than = mais difícil do que | first one = a primeira' },
    { num: '22', en: 'He is the best player on the team.', options: ['Ele é o melhor jogador do time.', 'Ele é o pior jogador do time.', 'Ele é um bom jogador do time.'], correct: 'Ele é o melhor jogador do time.', voc: 'the best = o melhor | player = jogador | team = time' },
    { num: '23', en: 'My sister is as tall as my mother.', options: ['Minha irmã é tão alta quanto minha mãe.', 'Minha irmã é mais alta do que minha mãe.', 'Minha mãe é mais alta do que minha irmã.'], correct: 'Minha irmã é tão alta quanto minha mãe.', voc: 'as tall as = tão alta quanto | mother = mãe' },
    { num: '24', en: 'This laptop is faster than my old computer.', options: ['Este notebook é mais rápido do que meu computador antigo.', 'Este notebook é mais lento do que meu computador antigo.', 'Este notebook é tão rápido quanto meu computador.'], correct: 'Este notebook é mais rápido do que meu computador antigo.', voc: 'faster than = mais rápido do que | old = antigo' },
    { num: '25', en: 'She wears a stylish small red coat.', options: ['Ela veste um casaco vermelho, pequeno e elegante.', 'Ela veste um casaco grande e feio.', 'Ela veste um casaco preto velho.'], correct: 'Ela veste um casaco vermelho, pequeno e elegante.', voc: 'stylish (elegante) + small (pequeno) + red (vermelho) + coat (casaco)' }
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

  Logger.log('Formulário HW 15b criado com sucesso! URL: ' + form.getEditUrl());
}
