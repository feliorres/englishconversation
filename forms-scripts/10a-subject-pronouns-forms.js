function criarFormularioSubjectPronouns() {
  // 1. Cria o formulário e define o título
  var form = FormApp.create('Aula de Inglês: Subject Pronouns (Pronomes Retos)');
  
  // 2. Configura como TESTE (Quiz)
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Todas as questões são obrigatórias e dissertativas.');

  // --- GRUPO A: Substituição (Dissertativa - Questões 1 a 5) ---
  var dadosGrupoA = [
    {q: '1. Carlos →'},
    {q: '2. Mary →'},
    {q: '3. O livro (objeto singular) →'},
    {q: '4. Pedro e eu →'},
    {q: '5. Ana e Julia →'}
  ];
  
  dadosGrupoA.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Escreva o pronome reto correspondente em inglês.')
        .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Dissertativa - Questões 6 a 10) ---
  var dadosGrupoB = [
    {q: '6. ______ am happy. (Eu estou feliz)'},
    {q: '7. ______ is a doctor. (Ele é um médico)'},
    {q: '8. ______ are students. (Vocês são estudantes)'},
    {q: '9. ______ is blue. (Isto é azul — falando de um carro)'},
    {q: '10. ______ are family. (Nós somos família)'}
  ];

  dadosGrupoB.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha a lacuna com a palavra correta em inglês.')
        .setRequired(true);
  });

  // --- GRUPO C: Regras (Dissertativa - Questões 11 a 15) ---
  var dadosGrupoC = [
    {q: '11. Qual pronome em inglês usamos para substituir "The cat" (O gato)?'},
    {q: '12. Qual pronome significa "Eu" e sempre deve ser escrito em letra maiúscula?'},
    {q: '13. Para dizer "Elas são inteligentes", qual pronome usamos para "Elas"?'},
    {q: '14. Se você estiver falando diretamente com um grupo de amigos, qual pronome usa para "Vocês"?'},
    {q: '15. Verdadeiro ou Falso: O pronome We significa "Eles".'}
  ];

  dadosGrupoC.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Dissertativa - Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    {num: '16', pt: 'Eu sou um professor.', voc: 'am | a | teacher'},
    {num: '17', pt: 'Ela é minha irmã.', voc: 'is | my | sister'},
    {num: '18', pt: 'Nós moramos aqui.', voc: 'live | here'},
    {num: '19', pt: 'Ele tem um cachorro.', voc: 'has | a | dog'},
    {num: '20', pt: 'Eles são amigos.', voc: 'are | friends'}
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Dissertativa - Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    {num: '21', en: 'You are happy.', voc: 'are: está / estão | happy: feliz / felizes'},
    {num: '22', en: 'It is a cat.', voc: 'is: é | a: um | cat: gato'},
    {num: '23', en: 'We have a car.', voc: 'have: temos | a: um | car: carro'},
    {num: '24', en: 'She lives in London.', voc: 'lives: mora | in: em | London: Londres'},
    {num: '25', en: 'He is a student.', voc: 'is: é | a: um | student: estudante'}
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário criado com sucesso! URL de edição: ' + form.getEditUrl());
}
