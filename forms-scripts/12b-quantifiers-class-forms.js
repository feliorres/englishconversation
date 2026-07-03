function criarFormularioQuantifiersClass() {
  var form = FormApp.create('12b - Aula: Contáveis/Incontáveis e Quantificadores');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões praticadas em sala de aula.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. I don\'t have ______ money today. (muito - negativo, incontável)', options: ['much', 'many', 'some', 'any'], correct: 'much', voc: 'have = tenho | money = dinheiro | today = hoje' },
    { q: '2. Do you have ______ questions? (alguma - pergunta, contável)', options: ['any', 'some', 'much', 'little'], correct: 'any', voc: 'have = tem | questions = perguntas' },
    { q: '3. There are ______ students in the library. (alguns - afirmativa, contável)', options: ['some', 'any', 'much', 'little'], correct: 'some', voc: 'There are = há | students = estudantes | in the library = na biblioteca' },
    { q: '4. She has very ______ time to study. (pouco - incontável)', options: ['little', 'few', 'many', 'much'], correct: 'little', voc: 'has = tem | very = muito | time = tempo | to study = para estudar' },
    { q: '5. He bought ______ apples. (poucas - contável)', options: ['few', 'little', 'much', 'some'], correct: 'few', voc: 'bought = comprou | apples = maçãs' },
    { q: '6. How ______ friends do you have? (quantos - contável)', options: ['many', 'much', 'few', 'some'], correct: 'many', voc: 'friends = amigos | do you have = você tem' },
    { q: '7. How ______ water is there? (quanta - incontável)', options: ['much', 'many', 'little', 'any'], correct: 'much', voc: 'water = água | is there = há' },
    { q: '8. I don\'t see ______ cars outside. (nenhum - negativo, contável)', options: ['any', 'some', 'much', 'few'], correct: 'any', voc: 'see = vejo | cars = carros | outside = lá fora' },
    { q: '9. We need ______ sugar for the recipe. (um pouco de - incontável, afirmativa)', options: ['some', 'any', 'many', 'few'], correct: 'some', voc: 'need = precisamos de | sugar = açúcar | for the recipe = para a receita' },
    { q: '10. There is only a ______ hope left. (pouca - incontável)', options: ['little', 'few', 'many', 'much'], correct: 'little', voc: 'There is = há | only = apenas | hope = esperança | left = restante' }
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
    { num: '11', pt: 'Eu não tenho muito tempo.', options: ['I don\'t have much time.', 'I don\'t have many time.', 'I don\'t have some time.'], correct: 'I don\'t have much time.', voc: 'Tempo = time' },
    { num: '12', pt: 'Ela tem muitos amigos na escola.', options: ['She has many friends at school.', 'She has much friends at school.', 'She has some friend at school.'], correct: 'She has many friends at school.', voc: 'Amigos = friends | Na escola = at school' },
    { num: '13', pt: 'Você quer um pouco de água?', options: ['Do you want some water?', 'Do you want any water?', 'Do you want many water?'], correct: 'Do you want some water.', voc: 'Você quer = Do you want | Água = water' },
    { num: '14', pt: 'Existem poucas pessoas aqui.', options: ['There are little people here.', 'There is few people here.', 'There are few people here.'], correct: 'There are few people here.', voc: 'Existem = There are | Pessoas = people | Aqui = here' },
    { num: '15', pt: 'Nós não temos nenhuma dúvida.', options: ['We don\'t have some doubts.', 'We don\'t have any doubts.', 'We don\'t have much doubt.'], correct: 'We don\'t have any doubts.', voc: 'Dúvida = doubt / doubts' },
    { num: '16', pt: 'Eu tenho poucas moedas no meu bolso.', options: ['I have few coins in my pocket.', 'I have little coins in my pocket.', 'I don\'t have coins in my pocket.'], correct: 'I have few coins in my pocket.', voc: 'Moedas = coins | Bolso = pocket' },
    { num: '17', pt: 'Ele não tem muita paciência.', options: ['He doesn\'t have many patience.', 'He has few patience.', 'He doesn\'t have much patience.'], correct: 'He doesn\'t have much patience.', voc: 'Paciência = patience' },
    { num: '18', pt: 'Eles compraram algumas flores ontem.', options: ['They bought any flowers yesterday.', 'They bought some flowers yesterday.', 'They bought many flower yesterday.'], correct: 'They bought some flowers yesterday.', voc: 'Compraram = bought | Flores = flowers | Ontem = yesterday' }
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Selecione a tradução correta. | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
    
    var choices = itemData.options.map(function(opt) {
      return item.createChoice(opt, opt.trim().replace('.', '') === itemData.correct.trim().replace('.', ''));
    });
    item.setChoices(choices);
  });

  // --- Tradução EN para PT (Questões 19 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '19', en: 'I have a little sugar in my tea.', options: ['Eu tenho um pouco de açúcar no meu chá.', 'Eu tenho poucos açúcar no meu chá.', 'Eu não tenho açúcar no meu chá.'], correct: 'Eu tenho um pouco de açúcar no meu chá.', voc: 'Sugar = açúcar | In my tea = no meu chá' },
    { num: '20', en: 'There aren\'t many cars on the street.', options: ['Não há muito carro na rua.', 'Há muitos carros na rua.', 'Não há muitos carros na rua.'], correct: 'Não há muitos carros na rua.', voc: 'There aren\'t = não há | Cars = carros | On the street = na rua' },
    { num: '21', en: 'Do you have any ideas?', options: ['Você tem muitas ideias?', 'Você tem nenhuma ideia?', 'Você tem alguma ideia?'], correct: 'Você tem alguma ideia?', voc: 'Ideas = ideias' },
    { num: '22', en: 'She spoke to a few students.', options: ['Ela falou com alguns estudantes.', 'Ela falou com pouca estudante.', 'Ela falou com nenhum estudante.'], correct: 'Ela falou com alguns estudantes.', voc: 'Spoke to = falou com | Students = estudantes' },
    { num: '23', en: 'He doesn\'t have much money.', options: ['Ele não tem muitos dinheiro.', 'Ele tem algum dinheiro.', 'Ele não tem muito dinheiro.'], correct: 'Ele não tem muito dinheiro.', voc: 'Money = dinheiro' },
    { num: '24', en: 'We need some help with the boxes.', options: ['Nós precisamos de ajuda com as caixas.', 'Nós não precisamos de ajuda com as caixas.', 'Nós precisamos de muitas ajudas com as caixas.'], correct: 'Nós precisamos de ajuda com as caixas.', voc: 'Need = precisamos | Help = ajuda | With the boxes = com as caixas' },
    { num: '25', en: 'There are few options available.', options: ['Há pouca opções disponíveis.', 'Há muitas opções disponíveis.', 'Há poucas opções disponíveis.'], correct: 'Há poucas opções disponíveis.', voc: 'Options = opções | Available = disponíveis' }
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

  Logger.log('Formulário de Aula 12B criado. URL: ' + form.getEditUrl());
}
