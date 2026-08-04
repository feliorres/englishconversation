function criarFormularioRegularVerbsClass() {
  var form = FormApp.create('16a - Aula: Verbos Regulares Frequentes no Present Simple');
  form.setIsQuiz(true);
  form.setDescription('Responda às 25 questões sobre a conjugação dos verbos regulares no Present Simple e o acréscimo de "-s" na 3ª pessoa (He / She / It).');

  // --- Complete / Conjugação correta (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Complete com o verbo To Like na 3ª pessoa: "She ______ (gosta) pizza."', options: ['likes', 'like', 'likes_s'], correct: 'likes', voc: 'like = gostar | pizza = pizza' },
    { q: '2. Complete com o verbo To Work: "They ______ (trabalham) in London."', options: ['work', 'works', 'working'], correct: 'work', voc: 'work = trabalhar | London = Londres' },
    { q: '3. Complete com o verbo To Live: "He ______ (mora) in a big house."', options: ['lives', 'live', 'livess'], correct: 'lives', voc: 'live = morar/viver | big house = casa grande' },
    { q: '4. Complete com o verbo To Need: "I ______ (preciso) your help."', options: ['need', 'needs', 'needing'], correct: 'need', voc: 'need = precisar | help = ajuda' },
    { q: '5. Complete com o verbo To Play: "Carlos ______ (joga) soccer every Sunday."', options: ['plays', 'play', 'playes'], correct: 'plays', voc: 'play = jogar | soccer = futebol | Sunday = domingo' }
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
    { q: '6. My brother ______ (ajuda) my mother every day.', options: ['helps', 'help', 'helpes'], correct: 'helps', voc: 'help = ajudar | mother = mãe' },
    { q: '7. We ______ (ligamos) to our grandmother on weekends.', options: ['call', 'calls', 'calling'], correct: 'call', voc: 'call = ligar/chamar | grandmother = avó' },
    { q: '8. Mary ______ (precisa) a new car.', options: ['needs', 'need', 'needes'], correct: 'needs', voc: 'need = precisar | new car = carro novo' },
    { q: '9. You ______ (gostam) music.', options: ['like', 'likes', 'liking'], correct: 'like', voc: 'like = gostar | music = música' },
    { q: '10. The doctor ______ (trabalha) at the hospital.', options: ['works', 'work', 'workes'], correct: 'works', voc: 'work = trabalhar | hospital = hospital' }
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
    { q: '11. Em quais pronomes do Present Simple devemos obrigatoriamente adicionar a terminação de 3ª pessoa ao verbo?', options: ['He, She e It', 'I, You e We', 'They e We'], correct: 'He, She e It', voc: '3ª pessoa do singular' },
    { q: '12. Como fica o verbo "to call" quando conjugated com "He"?', options: ['calls', 'call', 'calles'], correct: 'calls', voc: 'call = ligar' },
    { q: '13. Verdadeiro ou Falso: Para os pronomes "I, You, We, They", o verbo fica em sua forma base sem alteração.', options: ['Verdadeiro!', 'Falso! Sempre adicionamos -s.'], correct: 'Verdadeiro!', voc: 'forma base do verbo' },
    { q: '14. Qual frase está INCORRETA gramaticalmente?', options: ['She work at a bank.', 'She works at a bank.', 'I work at a bank.'], correct: 'She work at a bank.', voc: 'bank = banco' },
    { q: '15. Na frase "The cat plays in the garden", por que usamos "plays"?', options: ['Porque "The cat" corresponde ao pronome "It" (3ª pessoa).', 'Porque "cat" é plural.', 'Porque o verbo play exige -s em todos os pronomes.'], correct: 'Porque "The cat" corresponde ao pronome "It" (3ª pessoa).', voc: 'cat = gato (It)' }
  ];

  dadosGrupoC.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
      .setHelpText('Responda à questão de regra. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  // --- Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    { num: '16', pt: 'Ela gosta de ler livros.', options: ['She likes to read books.', 'She like to read books.', 'She liking to read books.'], correct: 'She likes to read books.', voc: 'likes = gosta | read = ler | books = livros' },
    { num: '17', pt: 'Nós moramos em São Paulo.', options: ['We live in São Paulo.', 'We lives in São Paulo.', 'We living in São Paulo.'], correct: 'We live in São Paulo.', voc: 'live = morar | in = em' },
    { num: '18', pt: 'Ele precisa de um computador novo.', options: ['He needs a new computer.', 'He need a new computer.', 'He needing a new computer.'], correct: 'He needs a new computer.', voc: 'needs = precisa | new = novo | computer = computador' },
    { num: '19', pt: 'Eles ajudam os amigos.', options: ['They help their friends.', 'They helps their friends.', 'They helping their friends.'], correct: 'They help their friends.', voc: 'help = ajudam | friends = amigos' },
    { num: '20', pt: 'Ana liga para o pai dela todas as noites.', options: ['Ana calls her father every night.', 'Ana call her father every night.', 'Ana calling her father every night.'], correct: 'Ana calls her father every night.', voc: 'calls = liga | father = pai | every night = todas as noites' }
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
    { num: '21', en: 'He works at a school.', options: ['Ele trabalha em uma escola.', 'Ele estuda em uma escola.', 'Ele mora em uma escola.'], correct: 'Ele trabalha em uma escola.', voc: 'works = trabalha | school = escola' },
    { num: '22', en: 'We need water.', options: ['Nós precisamos de água.', 'Nós bebemos água.', 'Nós compramos água.'], correct: 'Nós precisamos de água.', voc: 'need = precisamos | water = água' },
    { num: '23', en: 'She plays tennis on Saturdays.', options: ['Ela joga tênis aos sábados.', 'Ela joga futebol aos sábados.', 'Ela assiste tênis aos sábados.'], correct: 'Ela joga tênis aos sábados.', voc: 'plays = joga | Saturdays = sábados' },
    { num: '24', en: 'They call their teacher.', options: ['Eles ligam para o professor deles.', 'Eles ajudam o professor deles.', 'Eles gostam do professor deles.'], correct: 'Eles ligam para o professor deles.', voc: 'call = ligam | teacher = professor' },
    { num: '25', en: 'I live near the beach.', options: ['Eu moro perto da praia.', 'Eu moro longe da praia.', 'Eu trabalho na praia.'], correct: 'Eu moro perto da praia.', voc: 'live = moro | near = perto de | beach = praia' }
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

  Logger.log('Formulário de Aula 16a criado com sucesso! URL: ' + form.getEditUrl());
}
