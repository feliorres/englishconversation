function criarFormularioObjectPossessivePronouns() {
  // 1. Cria o formulário e define o título
  var form = FormApp.create('10b - Aula: Object and Possessive Pronouns');
  
  // 2. Configura como TESTE (Quiz)
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Todas as questões são obrigatórias e dissertativas.');

  // --- GRUPO A: Substituição (Dissertativa - Questões 1 a 5) ---
  var dadosGrupoA = [
    {q: '1. I talk to (para Carlos) ______ every day.'},
    {q: '2. This jacket is (de Maria / dela) ______.'},
    {q: '3. She sends (para mim / me) ______ an email.'},
    {q: '4. The red bicycle is (de Carlos / dele) ______.'},
    {q: '5. We see (Ana / a Ana) ______ at school.'}
  ];
  
  dadosGrupoA.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Escreva o pronome adequado em inglês.')
        .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Dissertativa - Questões 6 a 10) ---
  var dadosGrupoB = [
    {q: '6. She loves ______ (Ela me ama).'},
    {q: '7. This house is ______ (Esta casa é dele).'},
    {q: '8. I call ______ every night (Eu ligo para ela todas as noites).'},
    {q: '9. The blue notebook is ______ (O caderno azul é meu).'},
    {q: '10. John helps ______ with the tasks (John o ajuda com as tarefas).'}
  ];

  dadosGrupoB.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha a lacuna com a palavra correta em inglês.')
        .setRequired(true);
  });

  // --- GRUPO C: Regras (Dissertativa - Questões 11 a 15) ---
  var dadosGrupoC = [
    {q: '11. Verdadeiro ou Falso: Usamos "him" após um verbo para indicar quem recebe a ação da frase.'},
    {q: '12. Verdadeiro ou Falso: O pronome "mine" exige que um substantivo seja escrito logo após ele (ex: mine house).'},
    {q: '13. Verdadeiro ou Falso: "Hers" significa "dela" e é usado para evitar a repetição de um objeto já mencionado.'},
    {q: '14. Verdadeiro ou Falso: Na frase "This phone is of Peter", a estrutura final pode ser substituída corretamente por "his".'},
    {q: '15. Verdadeiro ou Falso: O pronome objeto "me" pode atuar como o sujeito que realiza a ação no início de uma frase.'}
  ];

  dadosGrupoC.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Dissertativa - Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    {num: '16', pt: 'Eu a amo.', voc: 'Eu = I | Amo = love'},
    {num: '17', pt: 'O carro é dele.', voc: 'O = the | Carro = car | É = is'},
    {num: '18', pt: 'Ela me ajuda.', voc: 'Ela = she | Ajuda = helps'},
    {num: '19', pt: 'Esta caneta é minha.', voc: 'Esta = this | Caneta = pen'},
    {num: '20', pt: 'Eu falo com ele.', voc: 'Eu = I | Falo com = talk to'}
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Dissertativa - Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    {num: '21', en: 'The book is hers.', voc: 'The = o | Book = livro | Is = é'},
    {num: '22', en: 'She sees him.', voc: 'She = ela | Sees = vê'},
    {num: '23', en: 'This is mine.', voc: 'This = isto / este'},
    {num: '24', en: 'They listen to me.', voc: 'They = eles | Listen to = escutam / ouvem'},
    {num: '25', en: 'Is this his?', voc: 'Is = é | This = isto / este'}
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário criado com sucesso! URL de edição: ' + form.getEditUrl());
}
