function criarFormularioSubjectPronounsHW() {
  // 1. Cria o formulário e define o título
  var form = FormApp.create('Lição de Casa: Subject Pronouns (Aula 10A)');
  
  // 2. Configura como TESTE (Quiz)
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção. Esta é a sua lição de casa. Todas as questões são obrigatórias.');

  // --- GRUPO A: Substituição (Questões 1 a 5) ---
  var dadosGrupoA = [
    {q: '1. Substitua pelo pronome reto adequado: Carlos and Pedro -> ______'},
    {q: '2. Substitua pelo pronome reto adequado: The cat -> ______'},
    {q: '3. Substitua pelo pronome reto adequado: Maria -> ______'},
    {q: '4. Substitua pelo pronome reto adequado: Robert and I -> ______'},
    {q: '5. Substitua pelo pronome reto adequado: The cars -> ______'}
  ];
  
  dadosGrupoA.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Escreva o pronome adequado em inglês (I, You, He, She, It, We, They).')
        .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Questões 6 a 10) ---
  var dadosGrupoB = [
    {q: '6. ______ am a student. (Eu sou um estudante)'},
    {q: '7. ______ is my teacher. (Ele é meu professor)'},
    {q: '8. ______ are family. (Nós somos família)'},
    {q: '9. ______ live here. (Eles moram aqui)'},
    {q: '10. ______ has a cat. (Ela tem um gato)'}
  ];

  dadosGrupoB.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Preencha com o pronome reto correspondente em inglês.')
        .setRequired(true);
  });

  // --- GRUPO C: Regras (Questões 11 a 15) ---
  var dadosGrupoC = [
    {q: '11. Verdadeiro ou Falso: O pronome "I" deve ser escrito com letra maiúscula apenas no início da frase.'},
    {q: '12. Verdadeiro ou Falso: Usamos "It" para nos referirmos a animais de estimação cujo sexo conhecemos bem.'},
    {q: '13. Verdadeiro ou Falso: O pronome "You" serve tanto para o singular (você) quanto para o plural (vocês).'},
    {q: '14. Verdadeiro ou Falso: "They" pode ser usado para coisas e objetos no plural.'},
    {q: '15. Verdadeiro ou Falso: "We" inclui a pessoa que fala (eu) e mais alguém.'}
  ];

  dadosGrupoC.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
        .setHelpText('Responda com "Verdadeiro" ou "Falso".')
        .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    {num: '16', pt: 'Nós estudamos inglês.', voc: 'Nós = We | Estudamos = study | Inglês = English'},
    {num: '17', pt: 'Ele é feliz.', voc: 'Ele = He | É = is | Feliz = happy'},
    {num: '18', pt: 'Elas jogam futebol.', voc: 'Elas = They | Jogam = play | Futebol = soccer'},
    {num: '19', pt: 'Eu tenho um carro.', voc: 'Eu = I | Tenho = have | Um = a | Carro = car'},
    {num: '20', pt: 'Você é meu amigo.', voc: 'Você = You | É = are | Meu = my | Amigo = friend'}
  ];

  dadosTraducaoPT_EN.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    {num: '21', en: 'It is a house.', voc: 'It = isto / ela | Is = é | A = uma | House = casa'},
    {num: '22', en: 'She lives in Brazil.', voc: 'She = ela | Lives in = mora no / vive no'},
    {num: '23', en: 'They are here.', voc: 'They = eles/elas | Are = estão | Here = aqui'},
    {num: '24', en: 'We have a dog.', voc: 'We = nós | Have = temos | A = um | Dog = cachorro'},
    {num: '25', en: 'He is a doctor.', voc: 'He = ele | Is = é | A = um | Doctor = médico'}
  ];

  dadosTraducaoEN_PT.forEach(function(itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
        .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
        .setRequired(true);
  });

  Logger.log('Formulário de Casa 10A criado com sucesso! URL de edição: ' + form.getEditUrl());
}
