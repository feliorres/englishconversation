function criarFormularioRevisao10b13bClass() {
  // 1. Cria o formulário e define o título
  var form = FormApp.create('Revisão Aulas 10b a 13b: Pronouns, To Be, Quantifiers & Literary Translation');
  
  // 2. Configura como TESTE (Quiz)
  form.setIsQuiz(true);
  form.setDescription('Formulário de revisão contendo 25 questões de múltipla escolha integrando os conteúdos das Aulas 10b, 11b, 12b e 13b.');

  // --- 25 QUESTÕES DE MÚLTIPLA ESCOLHA ---
  var dadosQuestoes = [
    // --- BLOCO 1: Object & Possessive Pronouns (Aulas 10b) ---
    {
      q: '1. Complete com o pronome objeto adequado: "I talk to Carlos every day. I see ______ at school."',
      options: ['him', 'his', 'he', 'himself'],
      correct: 'him',
      voc: 'talk to = falar com | every day = todos os dias | see = ver | at school = na escola'
    },
    {
      q: '2. Escolha o pronome possessivo correto: "This jacket belongs to Maria. It is ______."',
      options: ['hers', 'her', 'she', 'herself'],
      correct: 'hers',
      voc: 'belongs to = pertence a | jacket = jaqueta'
    },
    {
      q: '3. Complete com o pronome possessivo adequado: "The red bicycle belongs to Carlos. The bike is ______."',
      options: ['his', 'him', 'he', 'hiself'],
      correct: 'his',
      voc: 'belongs to = pertence a | red bicycle = bicicleta vermelha'
    },
    {
      q: '4. Complete com o pronome objeto: "She sends ______ an email every morning."',
      options: ['me', 'mine', 'I', 'my'],
      correct: 'me',
      voc: 'sends = envia | every morning = toda manhã'
    },
    {
      q: '5. Qual opção substitui corretamente as repetições? "This blue notebook is my notebook, not your notebook."',
      options: [
        'This blue notebook is mine, not yours.',
        'This blue notebook is my, not your.',
        'This blue notebook is me, not you.',
        'This blue notebook is my ones, not your ones.'
      ],
      correct: 'This blue notebook is mine, not yours.',
      voc: 'blue notebook = caderno azul | mine = meu/minha | yours = seu/sua'
    },
    {
      q: '6. Qual sentença apresenta o uso gramatical CORRETO dos pronomes possessivos?',
      options: [
        'The green book is hers and the red one is mine.',
        'The green book is her and the red one is me.',
        'The green book is hers house and the red one is mine house.',
        'The green book is she and the red one is I.'
      ],
      correct: 'The green book is hers and the red one is mine.',
      voc: 'green book = livro verde | red one = o vermelho'
    },

    // --- BLOCO 2: Verb To Be - Past & Future (Aulas 11b) ---
    {
      q: '7. Complete com a forma correta do verbo To Be no passado: "He ______ a young boy back then."',
      options: ['was', 'were', 'will be', 'is'],
      correct: 'was',
      voc: 'young boy = jovem garoto | back then = naquela época'
    },
    {
      q: '8. Complete com a forma correta do verbo To Be no passado: "They ______ very tired after the long journey."',
      options: ['were', 'was', 'will be', 'are'],
      correct: 'were',
      voc: 'tired = cansados | after = após | long journey = longa viagem'
    },
    {
      q: '9. Complete com a forma correta do verbo To Be no futuro: "We ______ in London next summer."',
      options: ['will be', 'was', 'were', 'are'],
      correct: 'will be',
      voc: 'next summer = no próximo verão | in London = em Londres'
    },
    {
      q: '10. Qual é a forma negativa correta no passado para a frase: "She was at home yesterday."?',
      options: [
        'She was not at home yesterday.',
        'She were not at home yesterday.',
        'She will not be at home yesterday.',
        'She is not at home yesterday.'
      ],
      correct: 'She was not at home yesterday.',
      voc: 'at home = em casa | yesterday = ontem'
    },
    {
      q: '11. Traduza para o Inglês: "Amanhã estará ensolarado."',
      options: [
        'Tomorrow will be sunny.',
        'Tomorrow was sunny.',
        'Tomorrow were sunny.',
        'Tomorrow is be sunny.'
      ],
      correct: 'Tomorrow will be sunny.',
      voc: 'Tomorrow = Amanhã | sunny = ensolarado'
    },
    {
      q: '12. Qual afirmação sobre a conjugação do verbo To Be no passado e futuro é VERDADEIRA?',
      options: [
        '"Will be" é usado para o futuro com todos os pronomes (I, you, he, she, it, we, they).',
        '"Was" é usado com os pronomes "they", "we" e "you".',
        '"Were" é a forma exclusiva da primeira pessoa do singular (I).',
        '"Will be" transforma-se em "will were" ao falar do futuro distante.'
      ],
      correct: '"Will be" é usado para o futuro com todos os pronomes (I, you, he, she, it, we, they).',
      voc: 'future = futuro | pronouns = pronomes'
    },

    // --- BLOCO 3: Quantifiers (Aulas 12b) ---
    {
      q: '13. Complete com o quantificador correto (incontável, frase negativa): "I don\'t have ______ money in my wallet today."',
      options: ['much', 'many', 'few', 'some'],
      correct: 'much',
      voc: 'money = dinheiro | wallet = carteira | today = hoje'
    },
    {
      q: '14. Complete com o quantificador correto (contável, pergunta): "How ______ students are in the classroom?"',
      options: ['many', 'much', 'little', 'any'],
      correct: 'many',
      voc: 'students = estudantes/alunos | classroom = sala de aula'
    },
    {
      q: '15. Complete com o quantificador correto (contável, quantidade pequena): "She has very ______ friends, but they are very close."',
      options: ['few', 'little', 'much', 'any'],
      correct: 'few',
      voc: 'friends = amigos | close = próximos/íntimos'
    },
    {
      q: '16. Complete com o quantificador correto (incontável, quantidade pequena): "There is only a ______ sugar left in the bowl."',
      options: ['little', 'few', 'many', 'any'],
      correct: 'little',
      voc: 'sugar = açúcar | bowl = tigela | left = restante'
    },
    {
      q: '17. Traduza para o Inglês: "Você tem alguma pergunta?"',
      options: [
        'Do you have any questions?',
        'Do you have much questions?',
        'Do you have little questions?',
        'Do you have few question?'
      ],
      correct: 'Do you have any questions?',
      voc: 'pergunta / perguntas = question / questions'
    },
    {
      q: '18. Qual alternativa aplica corretamente as regras dos quantificadores "some" e "any"?',
      options: [
        'We bought some apples, but we didn\'t buy any oranges.',
        'We bought any apples, but we didn\'t buy some oranges.',
        'We bought much apples, but we didn\'t buy little oranges.',
        'We bought few apple, but we didn\'t buy much orange.'
      ],
      correct: 'We bought some apples, but we didn\'t buy any oranges.',
      voc: 'bought = compramos | apples = maçãs | oranges = laranjas'
    },

    // --- BLOCO 4: Literary Translation & Contextual Review (Aulas 13b - The Happy Prince) ---
    {
      q: '19. Na frase "High above the city stood the statue", qual é a tradução correta da palavra "above"?',
      options: ['acima de', 'abaixo de', 'ao lado de', 'dentro de'],
      correct: 'acima de',
      voc: 'High = alto | city = cidade | stood = erguia-se | statue = estátua'
    },
    {
      q: '20. Na frase "He was gilded all over with thin leaves of fine gold", qual é o significado de "gilded"?',
      options: [
        'folheado / coberto de ouro',
        'pintado com tinta azul',
        'escondido na escuridão',
        'esculpido em pedra'
      ],
      correct: 'folheado / coberto de ouro',
      voc: 'gilded = folheado a ouro | leaves = folhas | fine gold = ouro fino'
    },
    {
      q: '21. Na frase "He had two bright sapphires for eyes", a palavra "had" indica:',
      options: [
        'Passado simples (tinha / possuía)',
        'Presente simples (tem / possui)',
        'Futuro simples (terá)',
        'Imperativo (tenha)'
      ],
      correct: 'Passado simples (tinha / possuía)',
      voc: 'bright = brilhantes | sapphires = safiras | eyes = olhos'
    },
    {
      q: '22. Na frase "A large red ruby glowed on his sword-hilt", o que significa "sword-hilt"?',
      options: [
        'punho da espada',
        'lâmina da espada',
        'ponta da lança',
        'bainha da espada'
      ],
      correct: 'punho da espada',
      voc: 'large = grande | ruby = rubi | glowed = brilhava | sword = espada'
    },
    {
      q: '23. Traduza a frase completa do texto literário: "The little swallow flew above the column."',
      options: [
        'A pequena andorinha voou acima da coluna.',
        'A grande andorinha pousou abaixo da coluna.',
        'O pequeno pássaro correu perto da coluna.',
        'A pequena andorinha estará acima da coluna.'
      ],
      correct: 'A pequena andorinha voou acima da coluna.',
      voc: 'little = pequena | swallow = andorinha | flew = voou | column = coluna'
    },
    {
      q: '24. Na frase literária "The prince gave them his eyes", qual é a tradução correta do pronome "them"?',
      options: [
        'a eles / para eles',
        'a ela / para ela',
        'a nós / para nós',
        'a mim / para mim'
      ],
      correct: 'a eles / para eles',
      voc: 'gave = deu | eyes = olhos'
    },
    {
      q: '25. Na frase "Is there any gold left on the statue?", qual quantificador foi usado e por quê?',
      options: [
        '"any", porque a frase é uma pergunta e "gold" é um substantivo incontável.',
        '"many", porque "gold" é um substantivo contável no plural.',
        '"few", porque a frase é afirmativa e indica quantidade grande.',
        '"some", porque "gold" é obrigatoriamente contado em unidades inteiras.'
      ],
      correct: '"any", porque a frase é uma pergunta e "gold" é um substantivo incontável.',
      voc: 'Is there = Há? | gold = ouro | left = restante | statue = estátua'
    }
  ];

  // Adiciona as questões ao formulário
  dadosQuestoes.forEach(function(itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
        .setHelpText('Selecione a opção correta. | Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);

    var choices = itemData.options.map(function(opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  Logger.log('Formulário de Revisão Aulas 10b-13b criado com sucesso! URL: ' + form.getEditUrl());
}
