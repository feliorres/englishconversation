function criarFormularioQuantifiersHW() {
  var form = FormApp.create('12b - Lição de casa: Contáveis/Incontáveis e Quantificadores');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Todas as questões são obrigatórias e dissertativas.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. I have ______ ideas for our project. (algumas - contável, afirmativa)', options: ['some', 'any', 'much', 'little'], correct: 'some', voc: 'ideas = ideias | for our project = para o nosso projeto' },
    { q: '2. We don\'t need ______ help. (nenhuma - incontável, negativa)', options: ['any', 'some', 'many', 'few'], correct: 'any', voc: 'need = precisamos de | help = ajuda' },
    { q: '3. There are too ______ mistakes in this text. (muitos - contável)', options: ['many', 'much', 'some', 'little'], correct: 'many', voc: 'too = demais / muitos | mistakes = erros | in this text = neste texto' },
    { q: '4. I have a ______ coins in my pocket. (poucas - contável)', options: ['few', 'little', 'much', 'any'], correct: 'few', voc: 'coins = moedas | in my pocket = no meu bolso' },
    { q: '5. There is ______ milk left in the bottle. (pouco - incontável)', options: ['little', 'few', 'many', 'any'], correct: 'little', voc: 'milk = leite | left = restante | in the bottle = na garrafa' },
    { q: '6. How ______ information do you need? (quanta - incontável)', options: ['much', 'many', 'few', 'some'], correct: 'much', voc: 'information = informação | do you need = você precisa' },
    { q: '7. There isn\'t ______ salt in the soup. (muito - incontável, negativa)', options: ['much', 'many', 'few', 'any'], correct: 'much', voc: 'salt = sal | in the soup = na sopa' },
    { q: '8. Do you have ______ pets? (algum - pergunta, contável)', options: ['any', 'some', 'much', 'little'], correct: 'any', voc: 'pets = animais de estimação' },
    { q: '9. She has ______ books to read this weekend. (muitos - contável)', options: ['many', 'much', 'little', 'any'], correct: 'many', voc: 'books = livros | to read = para ler | this weekend = neste fim de semana' },
    { q: '10. He has ______ interest in sports. (pouco - incontável)', options: ['little', 'few', 'many', 'some'], correct: 'little', voc: 'interest = interesse | in sports = em esportes' }
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
    { num: '11', pt: 'Eu tenho algumas perguntas importantes.', options: ['I have some important questions.', 'I have any important questions.', 'I have much important questions.'], correct: 'I have some important questions.', voc: 'Perguntas = questions | Importantes = important' },
    { num: '12', pt: 'Eles não têm muito dinheiro.', options: ['They don\'t have much money.', 'They don\'t have many money.', 'They don\'t have few money.'], correct: 'They don\'t have much money.', voc: 'Dinheiro = money' },
    { num: '13', pt: 'Há muitas cadeiras nesta sala.', options: ['There is many chairs in this room.', 'There are much chairs in this room.', 'There are many chairs in this room.'], correct: 'There are many chairs in this room.', voc: 'Cadeiras = chairs | Nesta sala = in this room' },
    { num: '14', pt: 'Ela tem pouca paciência com crianças.', options: ['She has few patience with children.', 'She has little patience with children.', 'She has many patience with children.'], correct: 'She has little patience with children.', voc: 'Paciência = patience | Com = with | Crianças = children' },
    { num: '15', pt: 'Você tem alguma ideia para a festa?', options: ['Do you have some ideas for the party?', 'Do you have much ideas for the party?', 'Do you have any ideas for the party?'], correct: 'Do you have any ideas for the party.', voc: 'Você tem = Do you have | Ideia = idea / ideas | Para a festa = for the party' },
    { num: '16', pt: 'Nós temos poucos minutos antes do ônibus.', options: ['We have little minutes before the bus.', 'We have many minutes before the bus.', 'We have few minutes before the bus.'], correct: 'We have few minutes before the bus.', voc: 'Minutos = minutes | Antes do = before the | Ônibus = bus' },
    { num: '17', pt: 'Eu bebo pouca água de manhã.', options: ['I drink few water in the morning.', 'I drink many water in the morning.', 'I drink little water in the morning.'], correct: 'I drink little water in the morning.', voc: 'Bebo = drink | Água = water | De manhã = in the morning' },
    { num: '18', pt: 'Há algum pão na cozinha?', options: ['Is there any bread in the kitchen?', 'Are there any bread in the kitchen?', 'Is there some bread in the kitchen?'], correct: 'Is there any bread in the kitchen.', voc: 'Há = Is there | Pão = bread | Na cozinha = in the kitchen' }
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
    { num: '19', en: 'We have a few minutes before the meeting.', options: ['Nós temos alguns minutos antes da reunião.', 'Nós temos pouco minutos antes da reunião.', 'Nós temos muita minutos antes da reunião.'], correct: 'Nós temos alguns minutos antes da reunião.', voc: 'Minutes = minutos | Before = antes de / da | Meeting = reunião' },
    { num: '20', en: 'He doesn\'t eat much fruit.', options: ['Ele não come muitas fruta.', 'Ele come pouca fruta.', 'Ele não come muita fruta.'], correct: 'Ele não come muita fruta.', voc: 'Eat = come | Fruit = fruta' },
    { num: '21', en: 'There isn\'t any bread on the table.', options: ['Não há algum pão sobre a mesa.', 'Há pão sobre a mesa.', 'Não há nenhum pão sobre a mesa.'], correct: 'Não há nenhum pão sobre a mesa.', voc: 'Bread = pão | On the table = sobre a mesa' },
    { num: '22', en: 'She bought some beautiful flowers.', options: ['Ela comprou nenhuma flores lindas.', 'Ela comprou muitos flores lindas.', 'Ela comprou algumas flores lindas.'], correct: 'Ela comprou algumas flores lindas.', voc: 'Bought = comprou | Beautiful = lindas | Flowers = flores' },
    { num: '23', en: 'I drink a little coffee every morning.', options: ['Eu bebo poucos café todas as manhãs.', 'Eu bebo muito café todas as manhãs.', 'Eu bebo um pouco de café todas as manhãs.'], correct: 'Eu bebo um pouco de café todas as manhãs.', voc: 'Drink = bebo | Coffee = café | Every morning = todas as manhãs' },
    { num: '24', en: 'They have many old books.', options: ['Eles tem muitos livros antigos.', 'Eles têm muito livros antigo.', 'Eles têm muitos livros antigos.'], correct: 'Eles têm muitos livros antigos.', voc: 'Have = têm | Old = antigos | Books = livros' },
    { num: '25', en: 'We have little time to waste.', options: ['Nós temos poucos tempo a perder.', 'Nós não temos tempo a perder.', 'Nós temos pouco tempo a perder.'], correct: 'Nós temos pouco tempo a perder.', voc: 'Time = tempo | To waste = a perder/desperdiçar' }
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

  Logger.log('Formulário de Lição de Casa 12B criado. URL: ' + form.getEditUrl());
}
