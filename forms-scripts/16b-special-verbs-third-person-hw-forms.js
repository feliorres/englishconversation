function criarFormularioSpecialVerbsHW() {
  var form = FormApp.create('16b - Homework: Verbos com Terminações Especiais na 3ª Pessoa');
  form.setIsQuiz(true);
  form.setDescription('Dever de Casa: Responda às 25 questões de fixação sobre as regras de terminação especial (-es, -ies).');

  // --- Complete / Terminações Especiais (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Complete na 3ª pessoa: "She ______ (assiste) cartoons."', options: ['watches', 'watchs', 'watchies'], correct: 'watches', voc: 'watch -> watches' },
    { q: '2. Complete na 3ª pessoa: "He ______ (lava) the windows."', options: ['washes', 'washs', 'washies'], correct: 'washes', voc: 'wash -> washes' },
    { q: '3. Complete na 3ª pessoa: "The student ______ (estuda) hard."', options: ['studies', 'studys', 'study'], correct: 'studies', voc: 'study -> studies' },
    { q: '4. Complete com To Go: "He ______ (vai) to the supermarket."', options: ['goes', 'gos', 'go'], correct: 'goes', voc: 'go -> goes' },
    { q: '5. Complete na 3ª pessoa: "She ______ (voa) to London today."', options: ['flies', 'flys', 'flyes'], correct: 'flies', voc: 'fly -> flies' }
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
    { q: '6. The teacher ______ (ensina) Spanish.', options: ['teaches', 'teachs', 'teachies'], correct: 'teaches', voc: 'teach -> teaches' },
    { q: '7. He ______ (conserta) computers.', options: ['fixes', 'fixs', 'fixies'], correct: 'fixes', voc: 'fix -> fixes' },
    { q: '8. She ______ (beija) her mother.', options: ['kisses', 'kisss', 'kissies'], correct: 'kisses', voc: 'kiss -> kisses' },
    { q: '9. He ______ (faz) his work.', options: ['does', 'dos', 'doing'], correct: 'does', voc: 'do -> does' },
    { q: '10. She ______ (tenta) to learn fast.', options: ['tries', 'trys', 'tryes'], correct: 'tries', voc: 'try -> tries' }
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
    { q: '11. Qual a regra para verbos terminados em -o (como go, do)?', options: ['Adiciona-se -es (ex: goes, does).', 'Adiciona-se apenas -s (ex: gos, dos).', 'Troca-se o -o por -ies.'], correct: 'Adiciona-se -es (ex: goes, does).', voc: 'regrando de verbos terminados em -o' },
    { q: '12. Qual opção traduz "Ela assiste TV" corretamente?', options: ['She watches TV.', 'She watchs TV.', 'She watch TV.'], correct: 'She watches TV.', voc: 'watches = assiste' },
    { q: '13. Como fica o verbo "to study" com o pronome "I"?', options: ['study (sem alteração)', 'studies', 'studys'], correct: 'study (sem alteração)', voc: 'primeira pessoa não muda' },
    { q: '14. Qual frase apresenta um ERRO na 3ª pessoa?', options: ['He washs the car.', 'He washes the car.', 'He washes the windows.'], correct: 'He washs the car.', voc: 'falta o -e antes do -s' },
    { q: '15. O verbo "enjoy" vira "enjoys" porque:', options: ['Há uma vogal antes do Y (o + y).', 'Há uma consoante antes do Y.', 'É uma exceção irregular.'], correct: 'Há uma vogal antes do Y (o + y).', voc: 'vogal + y -> -s' }
  ];

  dadosGrupoC.forEach(function (itemData) {
    var item = form.addMultipleChoiceItem();
    item.setTitle(itemData.q)
      .setHelpText('Responda à questão. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);

    var choices = itemData.options.map(function (opt) {
      return item.createChoice(opt, opt.trim() === itemData.correct.trim());
    });
    item.setChoices(choices);
  });

  // --- Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    { num: '16', pt: 'Ela lava as louças todas as noites.', options: ['She washes the dishes every night.', 'She washs the dishes every night.', 'She wash the dishes every night.'], correct: 'She washes the dishes every night.', voc: 'washes = lava | dishes = louças' },
    { num: '17', pt: 'Ele estuda história na universidade.', options: ['He studies history at university.', 'He studys history at university.', 'He study history at university.'], correct: 'He studies history at university.', voc: 'studies = estuda | history = história' },
    { num: '18', pt: 'O menino vai para o parque.', options: ['The boy goes to the park.', 'The boy gos to the park.', 'The boy go to the park.'], correct: 'The boy goes to the park.', voc: 'goes = vai | park = parque' },
    { num: '19', pt: 'Ela faz os exercícios de casa.', options: ['She does her homework.', 'She dos her homework.', 'She do her homework.'], correct: 'She does her homework.', voc: 'does = faz | homework = dever de casa' },
    { num: '20', pt: 'O pássaro voa alto no céu.', options: ['The bird flies high in the sky.', 'The bird flys high in the sky.', 'The bird fly high in the sky.'], correct: 'The bird flies high in the sky.', voc: 'flies = voa | bird = pássaro' }
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
    { num: '21', en: 'She teaches English to teenagers.', options: ['Ela ensina inglês para adolescentes.', 'Ela estuda inglês com adolescentes.', 'Ela fala inglês com adolescentes.'], correct: 'Ela ensina inglês para adolescentes.', voc: 'teaches = ensina | teenagers = adolescentes' },
    { num: '22', en: 'He washes his clothes.', options: ['Ele lava as roupas dele.', 'Ele passa as roupas dele.', 'Ele compra as roupas dele.'], correct: 'Ele lava as roupas dele.', voc: 'washes = lava | clothes = roupas' },
    { num: '23', en: 'The girl studies hard for exams.', options: ['A garota estuda muito para as provas.', 'A garota passa fácil nas provas.', 'A garota vai bem nas provas.'], correct: 'A garota estuda muito para as provas.', voc: 'studies = estuda | exams = provas' },
    { num: '24', en: 'He goes to sleep early.', options: ['Ele vai dormir cedo.', 'Ele acorda cedo.', 'Ele dorme tarde.'], correct: 'Ele vai dormir cedo.', voc: 'goes to sleep = vai dormir | early = cedo' },
    { num: '25', en: 'She does a great job.', options: ['Ela faz um ótimo trabalho.', 'Ela gosta de um ótimo trabalho.', 'Ela procura um ótimo trabalho.'], correct: 'Ela faz um ótimo trabalho.', voc: 'does = faz | great job = ótimo trabalho' }
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

  Logger.log('Formulário HW 16b criado com sucesso! URL: ' + form.getEditUrl());
}
