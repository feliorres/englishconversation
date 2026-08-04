function criarFormularioSpecialVerbsClass() {
  var form = FormApp.create('16b - Aula: Verbos com Terminações Especiais na 3ª Pessoa');
  form.setIsQuiz(true);
  form.setDescription('Responda às 25 questões sobre as regras de terminação especial (-es, -ies) na 3ª pessoa do singular (He / She / It).');

  // --- Complete / Terminações Especiais (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Complete na 3ª pessoa: "He ______ (assiste) TV every night."', options: ['watches', 'watchs', 'watch'], correct: 'watches', voc: 'watch (terminado em -ch) -> watches' },
    { q: '2. Complete na 3ª pessoa: "She ______ (lava) the dishes."', options: ['washes', 'washs', 'wash'], correct: 'washes', voc: 'wash (terminado em -sh) -> washes' },
    { q: '3. Complete na 3ª pessoa: "He ______ (estuda) English at school."', options: ['studies', 'studys', 'studyes'], correct: 'studies', voc: 'study (consoante + y) -> troca Y por -ies' },
    { q: '4. Complete com To Go: "Maria ______ (vai) to work by bus."', options: ['goes', 'gos', 'goess'], correct: 'goes', voc: 'go (terminado em -o) -> adiciona -es' },
    { q: '5. Complete na 3ª pessoa: "The baby ______ (chora) a lot."', options: ['cries', 'crys', 'cryes'], correct: 'cries', voc: 'cry (consoante + y) -> cries' }
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
    { q: '6. My father ______ (ensina) math at the university.', options: ['teaches', 'teachs', 'teachies'], correct: 'teaches', voc: 'teach -> teaches (terminação -ch)' },
    { q: '7. The mechanic ______ (conserta) cars.', options: ['fixes', 'fixs', 'fixies'], correct: 'fixes', voc: 'fix -> fixes (terminação -x)' },
    { q: '8. She ______ (beija) her son before sleep.', options: ['kisses', 'kisss', 'kissies'], correct: 'kisses', voc: 'kiss -> kisses (terminação -ss)' },
    { q: '9. He ______ (faz) his homework in the evening.', options: ['does', 'dos', 'doess'], correct: 'does', voc: 'do -> does (terminação -o)' },
    { q: '10. The student ______ (tenta) to solve the problem.', options: ['tries', 'trys', 'tryes'], correct: 'tries', voc: 'try -> tries (consoante + y)' }
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
    { q: '11. Quando um verbo termina em -ch, -sh, -ss, -x, -o, o que adicionamos na 3ª pessoa (He/She/It)?', options: ['Adicionamos -es', 'Adicionamos apenas -s', 'Adicionamos -ies'], correct: 'Adicionamos -es', voc: 'regras de ortografia da 3ª pessoa' },
    { q: '12. O que acontece com verbos terminados em Consoante + Y (como study, cry, fly)?', options: ['Troca-se o Y por -ies (ex: studies).', 'Mantém o Y e adiciona -s (ex: studys).', 'Não muda nada.'], correct: 'Troca-se o Y por -ies (ex: studies).', voc: 'd + y = consoante + y -> -ies' },
    { q: '13. Por que o verbo "play" fica "plays" e não "plaies"?', options: ['Porque antes do Y há uma vogal (a + y), então adicionamos apenas -s.', 'Porque play é uma exceção irregular.', 'Porque play significa jogar.'], correct: 'Porque antes do Y há uma vogal (a + y), então adicionamos apenas -s.', voc: 'vogal + y -> apenas -s (plays, buys, enjoys)' },
    { q: '14. Como fica o verbo "to wash" (lavar) quando conjugado para o pronome "They"?', options: ['wash (não adiciona -es)', 'washes', 'washies'], correct: 'wash (não adiciona -es)', voc: 'regras especiais aplicam-se apenas a He/She/It' },
    { q: '15. Qual frase contém a grafia CORRETA da 3ª pessoa?', options: ['She studies biology.', 'She studys biology.', 'She studyes biology.'], correct: 'She studies biology.', voc: 'biology = biologia' }
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
    { num: '16', pt: 'Ele assiste a jogos de futebol aos domingos.', options: ['He watches soccer games on Sundays.', 'He watchs soccer games on Sundays.', 'He watch soccer games on Sundays.'], correct: 'He watches soccer games on Sundays.', voc: 'watches = assiste | soccer games = jogos de futebol' },
    { num: '17', pt: 'Ela lava o carro todos os sábados.', options: ['She washes the car every Saturday.', 'She washs the car every Saturday.', 'She wash the car every Saturday.'], correct: 'She washes the car every Saturday.', voc: 'washes = lava | car = carro' },
    { num: '18', pt: 'Pedro estuda para o teste de inglês.', options: ['Pedro studies for the English test.', 'Pedro studys for the English test.', 'Pedro study for the English test.'], correct: 'Pedro studies for the English test.', voc: 'studies = estuda | test = teste' },
    { num: '19', pt: 'O avião voa alto.', options: ['The plane flies high.', 'The plane flys high.', 'The plane fly high.'], correct: 'The plane flies high.', voc: 'flies = voa | high = alto' },
    { num: '20', pt: 'Ela vai para a escola de manhã.', options: ['She goes to school in the morning.', 'She gos to school in the morning.', 'She go to school in the morning.'], correct: 'She goes to school in the morning.', voc: 'goes = vai | school = escola' }
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
    { num: '21', en: 'She watches movies at night.', options: ['Ela assiste a filmes à noite.', 'Ela faz filmes à noite.', 'Ela gosta de filmes à noite.'], correct: 'Ela assiste a filmes à noite.', voc: 'watches = assiste | movies = filmes' },
    { num: '22', en: 'He washes his hands before lunch.', options: ['Ele lava as mãos antes do almoço.', 'Ele seca as mãos antes do almoço.', 'Ele limpa as mãos antes do almoço.'], correct: 'Ele lava as mãos antes do almoço.', voc: 'washes = lava | hands = mãos | lunch = almoço' },
    { num: '23', en: 'My sister studies medicine.', options: ['Minha irmã estuda medicina.', 'Minha irmã pratica medicina.', 'Minha irmã ensina medicina.'], correct: 'Minha irmã estuda medicina.', voc: 'studies = estuda | medicine = medicina' },
    { num: '24', en: 'He goes to the gym every day.', options: ['Ele vai para a academia todos os dias.', 'Ele mora perto da academia.', 'Ele corre na academia.'], correct: 'Ele vai para a academia todos os dias.', voc: 'goes = vai | gym = academia' },
    { num: '25', en: 'The boy fixes the bicycle.', options: ['O menino conserta a bicicleta.', 'O menino anda de bicicleta.', 'O menino compra a bicicleta.'], correct: 'O menino conserta a bicicleta.', voc: 'fixes = conserta | bicycle = bicicleta' }
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

  Logger.log('Formulário de Aula 16b criado com sucesso! URL: ' + form.getEditUrl());
}
