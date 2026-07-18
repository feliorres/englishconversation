function criarFormularioLiteraryTranslationClass() {
  var form = FormApp.create('13b - Aula: Tradução Literária (The Happy Prince)');
  form.setIsQuiz(true);
  form.setDescription('Revisão das Aulas 10 a 13 (Vocabulário e Gramática). Responda com atenção às questões de tradução de palavras dentro de frases.');

  var dadosQuestoes = [
    {
      q: '1. "High above the city stood the statue." Traduza a palavra "above".',
      options: ['acima de', 'abaixo de', 'perto de'],
      correct: 'acima de',
      voc: 'High = alto | city = cidade | stood = erguia-se | statue = estátua'
    },
    {
      q: '2. "He was gilded all over with gold." Traduza a palavra "gilded".',
      options: ['folheado', 'pintado', 'escondido'],
      correct: 'folheado',
      voc: 'all over = todo/por toda parte | gold = ouro'
    },
    {
      q: '3. "The statue was covered with thin leaves." Traduza a palavra "thin".',
      options: ['finas', 'grossas', 'pesadas'],
      correct: 'finas',
      voc: 'covered = coberta | leaves = folhas'
    },
    {
      q: '4. "He had two bright sapphires for eyes." Traduza a palavra "sapphires".',
      options: ['safiras', 'rubis', 'diamantes'],
      correct: 'safiras',
      voc: 'bright = brilhantes | eyes = olhos'
    },
    {
      q: '5. "A large red ruby glowed on his sword-hilt." Traduza a palavra "ruby".',
      options: ['rubi', 'esmeralda', 'safira'],
      correct: 'rubi',
      voc: 'large = grande | red = vermelho | glowed = brilhava'
    },
    {
      q: '6. "The ruby glowed on his sword-hilt." Traduza a palavra "sword-hilt".',
      options: ['punho da espada', 'lâmina da espada', 'bainha da espada'],
      correct: 'punho da espada',
      voc: 'sword = espada | hilt = punho/cabo'
    },
    {
      q: '7. "The prince was very happy." Traduza a palavra "was".',
      options: ['era', 'é', 'será'],
      correct: 'era',
      voc: 'happy = feliz'
    },
    {
      q: '8. "They will be in the city tomorrow." Traduza a palavra "will be".',
      options: ['estarão', 'estavam', 'estão'],
      correct: 'estarão',
      voc: 'tomorrow = amanhã'
    },
    {
      q: '9. "We are very proud of you." Traduza a palavra "are".',
      options: ['somos', 'fomos', 'seremos'],
      correct: 'somos',
      voc: 'proud of = orgulhosos de'
    },
    {
      q: '10. "The statue stood on a tall column." Traduza a palavra "column".',
      options: ['coluna', 'colina', 'calçada'],
      correct: 'coluna',
      voc: 'stood = erguia-se | tall = alta'
    },
    {
      q: '11. "He was gilded with leaves of fine gold." Traduza a palavra "leaves".',
      options: ['folhas', 'galhos', 'flores'],
      correct: 'folhas',
      voc: 'leaves = folhas | fine gold = ouro fino'
    },
    {
      q: '12. "For eyes he had two bright sapphires." Traduza a palavra "had".',
      options: ['tinha', 'tem', 'terá'],
      correct: 'tinha',
      voc: 'had = tinha (passado de have)'
    },
    {
      q: '13. "Is there any gold left?" Traduza a palavra "any".',
      options: ['algum', 'nenhum', 'muito'],
      correct: 'algum',
      voc: 'gold = ouro | left = restante'
    },
    {
      q: '14. "She is a beautiful person." Traduza a palavra "is".',
      options: ['é', 'era', 'será'],
      correct: 'é',
      voc: 'beautiful = linda | person = pessoa'
    },
    {
      q: '15. "I was a student last year." Traduza a palavra "was".',
      options: ['era', 'sou', 'serei'],
      correct: 'era',
      voc: 'student = estudante | last year = ano passado'
    },
    {
      q: '16. "They were very tired yesterday." Traduza a palavra "were".',
      options: ['estavam', 'estão', 'estarão'],
      correct: 'estavam',
      voc: 'tired = cansados | yesterday = ontem'
    },
    {
      q: '17. "The gold leaves were very thin." Traduza a palavra "were".',
      options: ['eram', 'são', 'serão'],
      correct: 'eram',
      voc: 'gold = ouro | leaves = folhas | thin = finas'
    },
    {
      q: '18. "You will be a great doctor." Traduza a palavra "will be".',
      options: ['será', 'é', 'foi'],
      correct: 'será',
      voc: 'great = grande/ótimo | doctor = médico'
    },
    {
      q: '19. "The little swallow flew above the column." Traduza a palavra "flew".',
      options: ['voou', 'voa', 'voará'],
      correct: 'voou',
      voc: 'little = pequena | swallow = andorinha | flew = voou (passado de fly)'
    },
    {
      q: '20. "This ruby is for her." Traduza a palavra "her".',
      options: ['ela', 'ele', 'nós'],
      correct: 'ela',
      voc: 'ruby = rubi | for = para'
    },
    {
      q: '21. "The prince gave them his eyes." Traduza a palavra "them".',
      options: ['a eles', 'a ela', 'a nós'],
      correct: 'a eles',
      voc: 'gave = deu | eyes = olhos'
    },
    {
      q: '22. "The statue has some gold left." Traduza a palavra "some".',
      options: ['algum', 'nenhum', 'pouco'],
      correct: 'algum',
      voc: 'statue = estátua | gold = ouro'
    },
    {
      q: '23. "We don\'t have much time." Traduza a palavra "much".',
      options: ['muito', 'pouco', 'algum'],
      correct: 'muito',
      voc: 'have = temos | time = tempo'
    },
    {
      q: '24. "How many sapphires did he have?" Traduza a palavra "many".',
      options: ['muitas', 'poucas', 'quais'],
      correct: 'muitas',
      voc: 'sapphires = safiras | had = tinha'
    },
    {
      q: '25. "A bird was sitting on the statue." Traduza a palavra "was".',
      options: ['estava', 'está', 'estará'],
      correct: 'estava',
      voc: 'bird = pássaro | sitting = sentado | statue = estátua'
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

  Logger.log('Formulário de Aula 13B criado. URL: ' + form.getEditUrl());
}
