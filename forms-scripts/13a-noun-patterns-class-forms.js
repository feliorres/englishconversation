function criarFormularioNounPatternsClass() {
  var form = FormApp.create('13a - Aula: Padrões de Substantivos em Inglês');
  form.setIsQuiz(true);
  form.setDescription('Revisão das Aulas 10 a 13 (Parte A). Responda com atenção às questões de pronomes retos, verbo to be no presente, artigos e padrões de substantivos.');

  var dadosQuestoes = [
    {
      q: '1. "The babies are sleeping." Traduza a palavra "babies".',
      options: ['bebê', 'bebês', 'crianças'],
      correct: 'bebês',
      voc: 'babies = bebês | are sleeping = estão dormindo'
    },
    {
      q: '2. "We have three boxes." Traduza a palavra "boxes".',
      options: ['caixa', 'caixas', 'tomates'],
      correct: 'caixas',
      voc: 'have = temos | three = três | boxes = caixas'
    },
    {
      q: '3. "Those children are playing." Traduza a palavra "children".',
      options: ['criança', 'filhos', 'crianças'],
      correct: 'crianças',
      voc: 'Those = aqueles/aquelas | children = crianças | playing = jogando'
    },
    {
      q: '4. "I bought two knives." Traduza a palavra "knives".',
      options: ['facas', 'faca', 'garfos'],
      correct: 'facas',
      voc: 'bought = comprei | two = duas | knives = facas'
    },
    {
      q: '5. "They have two red cars." Traduza a palavra "red".',
      options: ['vermelho', 'vermelhos', 'verde'],
      correct: 'vermelhos',
      voc: 'have = têm | red = vermelho/vermelhos | cars = carros'
    },
    {
      q: '6. "She has many friends." Traduza a palavra "friends".',
      options: ['amigo', 'amigos', 'família'],
      correct: 'amigos',
      voc: 'has = tem | many = muitos/muitas | friends = amigos'
    },
    {
      q: '7. "We need to wash our feet." Traduza a palavra "feet".',
      options: ['pé', 'pés', 'mãos'],
      correct: 'pés',
      voc: 'need to wash = precisamos lavar | feet = pés'
    },
    {
      q: '8. "Several women are talking." Traduza a palavra "women".',
      options: ['mulher', 'mulheres', 'homens'],
      correct: 'mulheres',
      voc: 'Several = várias | women = mulheres | talking = conversando'
    },
    {
      q: '9. "He cleaned his teeth today." Traduza a palavra "teeth".',
      options: ['dente', 'dentes', 'boca'],
      correct: 'dentes',
      voc: 'cleaned = limpou | teeth = dentes | today = hoje'
    },
    {
      q: '10. "The mice ran away." Traduza a palavra "mice".',
      options: ['rato', 'ratos', 'gatos'],
      correct: 'ratos',
      voc: 'mice = ratos | ran away = fugiram'
    },
    {
      q: '11. "I am a teacher." Traduza a palavra "I".',
      options: ['Eu', 'Você', 'Ele'],
      correct: 'Eu',
      voc: 'I = eu | am = sou/estou | teacher = professor(a)'
    },
    {
      q: '12. "He is a good student." Traduza a palavra "He".',
      options: ['Ele', 'Ela', 'Eu'],
      correct: 'Ele',
      voc: 'is = é | good = bom | student = estudante'
    },
    {
      q: '13. "She is a doctor." Traduza a palavra "She".',
      options: ['Ela', 'Ele', 'Nós'],
      correct: 'Ela',
      voc: 'is = é | doctor = médica/médico'
    },
    {
      q: '14. "They are happy." Traduza a palavra "They".',
      options: ['Eles/Elas', 'Nós', 'Vocês'],
      correct: 'Eles/Elas',
      voc: 'are = são/estão | happy = felizes'
    },
    {
      q: '15. "We are friends." Traduza a palavra "We".',
      options: ['Nós', 'Eles', 'Eu'],
      correct: 'Nós',
      voc: 'are = somos | friends = amigos'
    },
    {
      q: '16. "It is a beautiful day." Traduza a palavra "It".',
      options: ['Ele/Ela (neutro)', 'Eu', 'Você'],
      correct: 'Ele/Ela (neutro)',
      voc: 'is = é | beautiful = bonito | day = dia'
    },
    {
      q: '17. "You are very nice." Traduza a palavra "You".',
      options: ['Você/Vocês', 'Eu', 'Eles'],
      correct: 'Você/Vocês',
      voc: 'are = é/são/está/estão | very = muito | nice = legal/simpático(a)'
    },
    {
      q: '18. "I am in the classroom." Traduza a palavra "am".',
      options: ['sou/estou', 'é/está', 'são/estão'],
      correct: 'sou/estou',
      voc: 'I = eu | in the = na | classroom = sala de aula'
    },
    {
      q: '19. "She is very tall." Traduza a palavra "is".',
      options: ['é/está', 'sou/estou', 'são/estão'],
      correct: 'é/está',
      voc: 'She = ela | very = muito | tall = alta'
    },
    {
      q: '20. "They are at school." Traduza a palavra "are".',
      options: ['são/estão', 'sou/estou', 'é/está'],
      correct: 'são/estão',
      voc: 'They = eles/elas | at school = na escola'
    },
    {
      q: '21. "The city has two libraries." Traduza a palavra "libraries".',
      options: ['biblioteca', 'bibliotecas', 'livrarias'],
      correct: 'bibliotecas',
      voc: 'city = cidade | has = tem | libraries = bibliotecas'
    },
    {
      q: '22. "This is an easy exercise." Traduza a palavra "an".',
      options: ['um/uma', 'uns/umas', 'o/a'],
      correct: 'um/uma',
      voc: 'This = este | is = é | easy = fácil | exercise = exercício | an = um/uma (antes de som de vogal)'
    },
    {
      q: '23. "A cat is on the street." Traduza a palavra "A".',
      options: ['Um/Uma', 'Uns/Umas', 'O/A'],
      correct: 'Um/Uma',
      voc: 'cat = gato | is = está | on the street = na rua | A = um/uma (antes de som de consoante)'
    },
    {
      q: '24. "The sun is hot today." Traduza a palavra "The".',
      options: ['O/A/Os/As', 'Um/Uma', 'Uns/Umas'],
      correct: 'O/A/Os/As',
      voc: 'sun = sol | is = está | hot = quente | today = hoje | The = artigo definido'
    },
    {
      q: '25. "We saw some yellow birds." Traduza a palavra "yellow".',
      options: ['amarelo', 'amarelos', 'azul'],
      correct: 'amarelos',
      voc: 'saw = vimos | yellow = amarelo/amarelos | birds = pássaros'
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

  Logger.log('Formulário de Aula 13A criado. URL: ' + form.getEditUrl());
}
