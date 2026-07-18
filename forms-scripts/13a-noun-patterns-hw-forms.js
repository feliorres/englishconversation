function criarFormularioNounPatternsHW() {
  var form = FormApp.create('13a - Lição de Casa: Padrões de Substantivos em Inglês');
  form.setIsQuiz(true);
  form.setDescription('Revisão das Aulas 10 a 13 (Parte A - Lição de Casa). Responda com atenção às questões de pronomes retos, verbo to be no presente, artigos e padrões de substantivos.');

  var dadosQuestoes = [
    {
      q: '1. "The tomatoes are fresh." Traduza a palavra "tomatoes".',
      options: ['tomate', 'tomates', 'batatas'],
      correct: 'tomates',
      voc: 'fresh = frescos'
    },
    {
      q: '2. "We saw two mice in the kitchen." Traduza a palavra "mice".',
      options: ['rato', 'ratos', 'gatos'],
      correct: 'ratos',
      voc: 'saw = vimos | kitchen = cozinha'
    },
    {
      q: '3. "Those women are singing." Traduza a palavra "women".',
      options: ['mulher', 'mulheres', 'meninas'],
      correct: 'mulheres',
      voc: 'singing = cantando'
    },
    {
      q: '4. "The dentist cleaned my teeth." Traduza a palavra "teeth".',
      options: ['dentes', 'dente', 'boca'],
      correct: 'dentes',
      voc: 'cleaned = limpou'
    },
    {
      q: '5. "Several leaves fell from the tree." Traduza a palavra "leaves".',
      options: ['folha', 'folhas', 'galhos'],
      correct: 'folhas',
      voc: 'fell = caíram | tree = árvore'
    },
    {
      q: '6. "She wants to buy yellow flowers." Traduza a palavra "yellow".',
      options: ['amarelas', 'amarela', 'azuis'],
      correct: 'amarelas',
      voc: 'wants to buy = quer comprar | flowers = flores'
    },
    {
      q: '7. "A group of people is waiting." Traduza a palavra "people".',
      options: ['pessoa', 'pessoas', 'povos'],
      correct: 'pessoas',
      voc: 'group of = grupo de | waiting = esperando'
    },
    {
      q: '8. "Do you have the keys?" Traduza a palavra "keys".',
      options: ['chave', 'chaves', 'portas'],
      correct: 'chaves',
      voc: 'Do you have = você tem'
    },
    {
      q: '9. "This house is very high." Traduza a palavra "house".',
      options: ['casas', 'casa', 'apartamento'],
      correct: 'casa',
      voc: 'very high = muito alta'
    },
    {
      q: '10. "We need some big boxes." Traduza a palavra "boxes".',
      options: ['caixa', 'caixas', 'tomates'],
      correct: 'caixas',
      voc: 'need = precisamos | big = grandes'
    },
    {
      q: '11. "He is an architect." Traduza a palavra "He".',
      options: ['Ele', 'Ela', 'Eu'],
      correct: 'Ele',
      voc: 'is = é | architect = arquiteto'
    },
    {
      q: '12. "They are playing football." Traduza a palavra "They".',
      options: ['Eles/Elas', 'Nós', 'Vocês'],
      correct: 'Eles/Elas',
      voc: 'are playing = estão jogando | football = futebol'
    },
    {
      q: '13. "She is a beautiful girl." Traduza a palavra "She".',
      options: ['Ela', 'Ele', 'Eu'],
      correct: 'Ela',
      voc: 'is = é | beautiful = bonita | girl = garota'
    },
    {
      q: '14. "We are in the garden." Traduza a palavra "We".',
      options: ['Nós', 'Eles', 'Eu'],
      correct: 'Nós',
      voc: 'are = estamos | in the = no | garden = jardim'
    },
    {
      q: '15. "It is a clean office." Traduza a palavra "It".',
      options: ['Ele/Ela (neutro)', 'Eu', 'Você'],
      correct: 'Ele/Ela (neutro)',
      voc: 'is = é | clean = limpo | office = escritório'
    },
    {
      q: '16. "You are my best friend." Traduza a palavra "You".',
      options: ['Você/Vocês', 'Eu', 'Eles'],
      correct: 'Você/Vocês',
      voc: 'are = é/são/está/estão | my = meu | best = melhor | friend = amigo'
    },
    {
      q: '17. "I am very tired today." Traduza a palavra "am".',
      options: ['sou/estou', 'é/está', 'são/estão'],
      correct: 'sou/estou',
      voc: 'I = eu | very = muito | tired = cansado | today = hoje'
    },
    {
      q: '18. "The dog is in the yard." Traduza a palavra "is".',
      options: ['é/está', 'sou/estou', 'são/estão'],
      correct: 'é/está',
      voc: 'dog = cachorro | in the = no | yard = quintal'
    },
    {
      q: '19. "The men are working." Traduza a palavra "are".',
      options: ['são/estão', 'sou/estou', 'é/está'],
      correct: 'são/estão',
      voc: 'men = homens | working = trabalhando'
    },
    {
      q: '20. "An apple is on the table." Traduza a palavra "An".',
      options: ['Um/Uma', 'Uns/Umas', 'O/A'],
      correct: 'Um/Uma',
      voc: 'apple = maçã | is = está | on the table = na mesa | An = um/uma (antes de som de vogal)'
    },
    {
      q: '21. "The children are playing." Traduza a palavra "children".',
      options: ['crianças', 'criança', 'adultos'],
      correct: 'crianças',
      voc: 'are playing = estão brincando/jogando'
    },
    {
      q: '22. "I bought a blue shirt." Traduza a palavra "a".',
      options: ['um/uma', 'uns/umas', 'o/a'],
      correct: 'um/uma',
      voc: 'bought = comprei | blue = azul | shirt = camisa | a = um/uma (antes de som de consoante)'
    },
    {
      q: '23. "The moon is bright tonight." Traduza a palavra "The".',
      options: ['O/A/Os/As', 'Um/Uma', 'Uns/Umas'],
      correct: 'O/A/Os/As',
      voc: 'moon = lua | is = está | bright = brilhante | tonight = hoje à noite'
    },
    {
      q: '24. "He broke three glasses." Traduza a palavra "glasses".',
      options: ['copos', 'copo', 'pratos'],
      correct: 'copos',
      voc: 'broke = quebrou | three = três'
    },
    {
      q: '25. "They built some tall columns." Traduza a palavra "tall".',
      options: ['alto', 'altos/altas', 'baixo'],
      correct: 'altos/altas',
      voc: 'built = construíram | columns = colunas'
    }
  ];

  dadosQuestoes.forEach(function (itemData, index) {
    var item = form.addMultipleChoiceItem();
    item.setTitle((index + 1) + '. ' + itemData.q.replace(/^\d+\.\s*/, ''))
      .setHelpText('Selecione a opção correta. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt === itemData.correct);
    });
    item.setChoices(choices);
  });

  Logger.log('Formulário de Lição de Casa 13A criado. URL: ' + form.getEditUrl());
}
