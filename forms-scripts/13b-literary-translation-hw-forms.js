function criarFormularioLiteraryTranslationHW() {
  var form = FormApp.create('13b - Lição de Casa: Tradução Literária (The Happy Prince)');
  form.setIsQuiz(true);
  form.setDescription('Revisão das Aulas 10 a 13 (Vocabulário e Gramática - Lição de Casa). Responda com atenção às questões de tradução de palavras dentro de frases.');

  var dadosQuestoes = [
    {
      q: '1. "The bird flew above the tall column." Traduza a palavra "column".',
      options: ['coluna', 'ponte', 'estátua'],
      correct: 'coluna',
      voc: 'flew = voou | tall = alta'
    },
    {
      q: '2. "She has a ring made of fine gold." Traduza a palavra "fine".',
      options: ['fino', 'grosso', 'barato'],
      correct: 'fino',
      voc: 'ring = anel | made of = feito de | gold = ouro'
    },
    {
      q: '3. "The wind blew the dry leaves away." Traduza a palavra "leaves".',
      options: ['folhas', 'flores', 'sementes'],
      correct: 'folhas',
      voc: 'wind = vento | blew away = soprou para longe | dry = secas'
    },
    {
      q: '4. "Her blue eyes looked like beautiful sapphires." Traduza a palavra "sapphires".',
      options: ['safiras', 'rubis', 'esmeraldas'],
      correct: 'safiras',
      voc: 'looked like = pareciam com | beautiful = lindas'
    },
    {
      q: '5. "The red ruby in the necklace is expensive." Traduza a palavra "ruby".',
      options: ['rubi', 'diamante', 'pérola'],
      correct: 'rubi',
      voc: 'necklace = colar | expensive = caro'
    },
    {
      q: '6. "He gripped the hilt of the sword." Traduza a palavra "hilt".',
      options: ['punho', 'lâmina', 'bainha'],
      correct: 'punho',
      voc: 'gripped = segurou firme | sword = espada'
    },
    {
      q: '7. "A swallow was flying high above the town." Traduza a palavra "above".',
      options: ['acima de', 'abaixo de', 'dentro de'],
      correct: 'acima de',
      voc: 'swallow = andorinha | flying = voando | town = cidade'
    },
    {
      q: '8. "The gold statue was gilded all over." Traduza a palavra "gilded".',
      options: ['folheada', 'pintada', 'quebrada'],
      correct: 'folheada',
      voc: 'all over = toda/por toda parte'
    },
    {
      q: '9. "The candle glowed in the dark room." Traduza a palavra "glowed".',
      options: ['brilhava', 'apagou', 'queimou'],
      correct: 'brilhava',
      voc: 'candle = vela | dark room = quarto escuro'
    },
    {
      q: '10. "The Happy Prince helped the poor people." Traduza a palavra "people".',
      options: ['pessoas', 'pessoa', 'animais'],
      correct: 'pessoas',
      voc: 'helped = ajudou | poor = pobres'
    },
    {
      q: '11. "He will be a hero tomorrow." Traduza a palavra "will be".',
      options: ['será', 'foi', 'é'],
      correct: 'será',
      voc: 'hero = herói | tomorrow = amanhã'
    },
    {
      q: '12. "They were not happy with the decision." Traduza a palavra "were".',
      options: ['estavam', 'estão', 'estarão'],
      correct: 'estavam',
      voc: 'decision = decisão'
    },
    {
      q: '13. "Is this book yours or mine?" Traduza a palavra "yours".',
      options: ['seu', 'meu', 'dela'],
      correct: 'seu',
      voc: 'book = livro | mine = meu'
    },
    {
      q: '14. "She gave us some gold leaves." Traduza a palavra "us".',
      options: ['nos', 'me', 'lhes'],
      correct: 'nos',
      voc: 'gave = deu | some = algumas | leaves = folhas'
    },
    {
      q: '15. "They will be here soon." Traduza a palavra "will be".',
      options: ['estarão', 'estão', 'estavam'],
      correct: 'estarão',
      voc: 'here = aqui | soon = em breve'
    },
    {
      q: '16. "I was very busy yesterday." Traduza a palavra "was".',
      options: ['estava', 'estou', 'estarei'],
      correct: 'estava',
      voc: 'busy = ocupado | yesterday = ontem'
    },
    {
      q: '17. "The prince has many precious gems." Traduza a palavra "many".',
      options: ['muitas', 'poucas', 'algumas'],
      correct: 'muitas',
      voc: 'precious = preciosas | gems = gemas/pedras preciosas'
    },
    {
      q: '18. "Do we have much gold?" Traduza a palavra "much".',
      options: ['muito', 'pouco', 'algum'],
      correct: 'muito',
      voc: 'gold = ouro'
    },
    {
      q: '19. "The little bird lived on the column." Traduza a palavra "column".',
      options: ['coluna', 'telhado', 'árvore'],
      correct: 'coluna',
      voc: 'little bird = pequeno pássaro | lived = vivia'
    },
    {
      q: '20. "This statue is theirs." Traduza a palavra "theirs".',
      options: ['deles', 'nosso', 'seu'],
      correct: 'deles',
      voc: 'statue = estátua | theirs = deles/delas'
    },
    {
      q: '21. "Where are the children playing?" Traduza a palavra "children".',
      options: ['crianças', 'criança', 'adultos'],
      correct: 'crianças',
      voc: 'Where are = onde estão | playing = jogando/brincando'
    },
    {
      q: '22. "I need an hour to finish." Traduza a palavra "an".',
      options: ['uma', 'um', 'umas'],
      correct: 'uma',
      voc: 'need = preciso de | hour = hora | finish = terminar'
    },
    {
      q: '23. "Those rubies are very bright." Traduza a palavra "those".',
      options: ['aqueles', 'estes', 'esse'],
      correct: 'aqueles',
      voc: 'rubies = rubis | very bright = muito brilhantes'
    },
    {
      q: '24. "He bought a red sword-hilt." Traduza a palavra "sword-hilt".',
      options: ['punho de espada', 'bainha de espada', 'lâmina de espada'],
      correct: 'punho de espada',
      voc: 'bought = comprou'
    },
    {
      q: '25. "The leaves of the trees are beautiful." Traduza a palavra "leaves".',
      options: ['folhas', 'flores', 'raízes'],
      correct: 'folhas',
      voc: 'trees = árvores | beautiful = bonitas'
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

  Logger.log('Formulário de Lição de Casa 13B criado. URL: ' + form.getEditUrl());
}
