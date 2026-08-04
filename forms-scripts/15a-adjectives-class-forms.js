function criarFormularioAdjectivesClass() {
  var form = FormApp.create('15a - Aula: Posição e Invariabilidade dos Adjetivos');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às 25 questões sobre a posição dos adjetivos antes dos substantivos e sua invariabilidade em inglês.');

  // --- Complete / Escolha a posição correta (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Escolha a frase com a posição correta do adjetivo:', options: ['She has a red car.', 'She has a car red.', 'She has red a car.'], correct: 'She has a red car.', voc: 'red = vermelho/vermelha | car = carro' },
    { q: '2. Escolha a forma correta no plural:', options: ['They are good students.', 'They are goods students.', 'They are good studentes.'], correct: 'They are good students.', voc: 'good = bom/bons | students = estudantes' },
    { q: '3. Como dizemos "uma cidade grande"?', options: ['a big city', 'a city big', 'big a city'], correct: 'a big city', voc: 'big = grande | city = cidade' },
    { q: '4. Qual frase está gramaticalmente CORRETA em inglês?', options: ['These are expensive watches.', 'These are expensives watches.', 'These are watches expensives.'], correct: 'These are expensive watches.', voc: 'expensive = caro(s) | watches = relógios' },
    { q: '5. Escolha a opção correta:', options: ['I live in a small house.', 'I live in a house small.', 'I live in small a house.'], correct: 'I live in a small house.', voc: 'small = pequena | house = casa' }
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
    { q: '6. He is a ______ (alto) man.', options: ['tall', 'talls', 'man tall'], correct: 'tall', voc: 'tall = alto | man = homem' },
    { q: '7. We have ______ (novos) computers.', options: ['new', 'news', 'computers new'], correct: 'new', voc: 'new = novo(s) | computers = computadores' },
    { q: '8. She bought a ______ (linda) dress.', options: ['pretty', 'pretties', 'dress pretty'], correct: 'pretty', voc: 'pretty = linda/bonita | dress = vestido' },
    { q: '9. They are ______ (inteligentes) girls.', options: ['smart', 'smarts', 'smartes'], correct: 'smart', voc: 'smart = inteligente(s) | girls = garotas' },
    { q: '10. It is a ______ (fria) night.', options: ['cold', 'colds', 'night cold'], correct: 'cold', voc: 'cold = fria | night = noite' }
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
    { q: '11. Verdadeiro ou Falso: Os adjetivos em inglês variam em gênero (masculino/feminino) e número (singular/plural).', options: ['Falso! Adjetivos são invariáveis.', 'Verdadeiro! Adjetivos mudam no plural.'], correct: 'Falso! Adjetivos são invariáveis.', voc: 'invariável = não muda no plural ou feminino' },
    { q: '12. Onde o adjetivo deve ser posicionado na frase em inglês em relação ao substantivo?', options: ['Antes do substantivo (ex: red car).', 'Depois do substantivo (ex: car red).', 'Sempre no final da frase.'], correct: 'Antes do substantivo (ex: red car).', voc: 'substantivo = nome da coisa/pessoa' },
    { q: '13. Como fica o adjetivo "happy" quando falamos de duas pessoas no plural ("They are...")?', options: ['happy (não muda)', 'happys', 'happies'], correct: 'happy (não muda)', voc: 'happy = feliz/felizes' },
    { q: '14. Qual erro existe na frase "She has blues eyes"?', options: ['O adjetivo "blue" recebeu o "s" do plural incorretamente.', 'A palavra "eyes" deveria estar antes de "blue".', 'A frase está perfeita.'], correct: 'O adjetivo "blue" recebeu o "s" do plural incorretamente.', voc: 'eyes = olhos' },
    { q: '15. Na frase "The coffee is hot", o adjetivo "hot" vem após o verbo To Be. Isso está correto?', options: ['Sim, adjetivos podem vir após verbos de ligação como To Be.', 'Não, deveria ser "The hot coffee is".', 'Não, hot nunca pode vir no final.'], correct: 'Sim, adjetivos podem vir após verbos de ligação como To Be.', voc: 'hot = quente | coffee = café' }
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
    { num: '16', pt: 'Eu sou um bom estudante.', options: ['I am a good student.', 'I am a student good.', 'I am good a student.'], correct: 'I am a good student.', voc: 'bom = good | estudante = student' },
    { num: '17', pt: 'É uma cidade grande.', options: ['It is a big city.', 'It is a city big.', 'It is big a city.'], correct: 'It is a big city.', voc: 'grande = big | cidade = city' },
    { num: '18', pt: 'Eles têm carros amarelos.', options: ['They have yellow cars.', 'They have yellows cars.', 'They have cars yellows.'], correct: 'They have yellow cars.', voc: 'amarelos = yellow | carros = cars' },
    { num: '19', pt: 'Ela veste roupas confortáveis.', options: ['She wears comfortable clothes.', 'She wears comfortables clothes.', 'She wears clothes comfortable.'], correct: 'She wears comfortable clothes.', voc: 'veste = wears | confortáveis = comfortable | roupas = clothes' },
    { num: '20', pt: 'Nós temos professores excelentes.', options: ['We have excellent teachers.', 'We have excellents teachers.', 'We have teachers excellent.'], correct: 'We have excellent teachers.', voc: 'excelentes = excellent | professores = teachers' }
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
    { num: '21', en: 'They live in a beautiful house.', options: ['Eles moram em uma casa linda.', 'Eles moram em uma linda casa.', 'Ambas as opções em português estão corretas.'], correct: 'Ambas as opções em português estão corretas.', voc: 'beautiful = linda/bonita | house = casa' },
    { num: '22', en: 'He reads interesting books.', options: ['Ele lê livros interessantes.', 'Ele lê um livro interessante.', 'Ele lê interessantes livros.'], correct: 'Ele lê livros interessantes.', voc: 'reads = lê | interesting = interessantes | books = livros' },
    { num: '23', en: 'She is a fast runner.', options: ['Ela é uma corredora rápida.', 'Ela é um corredor rápido.', 'Ela corre rapidamente.'], correct: 'Ela é uma corredora rápida.', voc: 'fast = rápida | runner = corredora' },
    { num: '24', en: 'This is an easy test.', options: ['Este é um teste fácil.', 'Este é um teste difícil.', 'Estes são testes fáceis.'], correct: 'Este é um teste fácil.', voc: 'easy = fácil | test = teste' },
    { num: '25', en: 'We need fresh water.', options: ['Nós precisamos de água fresca.', 'Nós precisamos de águas frescas.', 'Nós queremos água fria.'], correct: 'Nós precisamos de água fresca.', voc: 'need = precisamos | fresh = fresca | water = água' }
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

  Logger.log('Formulário de Aula 15a criado com sucesso! URL: ' + form.getEditUrl());
}
