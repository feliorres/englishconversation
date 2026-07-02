function criarFormularioQuantifiersHW() {
  var form = FormApp.create('12b - Lição de casa: Contáveis/Incontáveis e Quantificadores');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Todas as questões são obrigatórias e dissertativas.');

  // --- Complete as Lacunas (Questões 1 a 10) ---
  var dadosLacunas = [
    { q: '1. I have ______ ideas for our project. (algumas - contável, afirmativa)', voc: 'ideas = ideias | for our project = para o nosso projeto' },
    { q: '2. We don\'t need ______ help. (nenhuma - incontável, negativa)', voc: 'need = precisamos de | help = ajuda' },
    { q: '3. There are too ______ mistakes in this text. (muitos - contável)', voc: 'too = demais / muitos | mistakes = erros | in this text = neste texto' },
    { q: '4. I have a ______ coins in my pocket. (poucas - contável)', voc: 'coins = moedas | in my pocket = no meu bolso' },
    { q: '5. There is ______ milk left in the bottle. (pouco - incontável)', voc: 'milk = leite | left = restante | in the bottle = na garrafa' },
    { q: '6. How ______ information do you need? (quanta - incontável)', voc: 'information = informação | do you need = você precisa' },
    { q: '7. There isn\'t ______ salt in the soup. (muito - incontável, negativa)', voc: 'salt = sal | in the soup = na sopa' },
    { q: '8. Do you have ______ pets? (algum - pergunta, contável)', voc: 'pets = animais de estimação' },
    { q: '9. She has ______ books to read this weekend. (muitos - contável)', voc: 'books = livros | to read = para ler | this weekend = neste fim de semana' },
    { q: '10. He has ______ interest in sports. (pouco - incontável)', voc: 'interest = interesse | in sports = em esportes' }
  ];

  dadosLacunas.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com o quantificador correto (much, many, some, any, few, little). | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- Tradução PT para EN (Questões 11 a 18) ---
  var dadosTraducaoPT_EN = [
    { num: '11', pt: 'Eu tenho algumas perguntas importantes.', voc: 'Perguntas = questions | Importantes = important' },
    { num: '12', pt: 'Eles não têm muito dinheiro.', voc: 'Dinheiro = money' },
    { num: '13', pt: 'Há muitas cadeiras nesta sala.', voc: 'Cadeiras = chairs | Nesta sala = in this room' },
    { num: '14', pt: 'Ela tem pouca paciência com crianças.', voc: 'Paciência = patience | Com = with | Crianças = children' },
    { num: '15', pt: 'Você tem alguma ideia para a festa?', voc: 'Você tem = Do you have | Ideia = idea / ideas | Para a festa = for the party' },
    { num: '16', pt: 'Nós temos poucos minutos antes do ônibus.', voc: 'Minutos = minutes | Antes do = before the | Ônibus = bus' },
    { num: '17', pt: 'Eu bebo pouca água de manhã.', voc: 'Bebo = drink | Água = water | De manhã = in the morning' },
    { num: '18', pt: 'Há algum pão na cozinha?', voc: 'Há = Is there | Pão = bread | Na cozinha = in the kitchen' }
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- Tradução EN para PT (Questões 19 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '19', en: 'We have a few minutes before the meeting.', voc: 'Minutes = minutos | Before = antes de / da | Meeting = reunião' },
    { num: '20', en: 'He doesn\'t eat much fruit.', voc: 'Eat = come | Fruit = fruta' },
    { num: '21', en: 'There isn\'t any bread on the table.', voc: 'Bread = pão | On the table = sobre a mesa' },
    { num: '22', en: 'She bought some beautiful flowers.', voc: 'Bought = comprou | Beautiful = lindas | Flowers = flores' },
    { num: '23', en: 'I drink a little coffee every morning.', voc: 'Drink = bebo | Coffee = café | Every morning = todas as manhãs' },
    { num: '24', en: 'They have many old books.', voc: 'Have = têm | Old = antigos | Books = livros' },
    { num: '25', en: 'We have little time to waste.', voc: 'Time = tempo | To waste = a perder/desperdiçar' }
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Lição de Casa 12B criado. URL: ' + form.getEditUrl());
}
