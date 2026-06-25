function criarFormularioVerbToBePastFutureClass() {
  var form = FormApp.create('11b - Aula: To Be no Passado e Futuro');
  form.setIsQuiz(true);
  form.setDescription('Responda com atenção às questões praticadas em sala de aula.');

  // --- GRUPO A: Substituição (Questões 1 a 5) ---
  var dadosGrupoA = [
    { q: '1. Substitua pelo verbo to be correspondente: He -> ______ a child back then. (passado)', voc: 'child = criança | back then = naquela época' },
    { q: '2. Substitua pelo verbo to be correspondente: They -> ______ at the party tomorrow. (futuro)', voc: 'at the party = na festa | tomorrow = amanhã' },
    { q: '3. Substitua pelo verbo to be correspondente: We -> ______ tired after the match. (passado)', voc: 'tired = cansados | after = depois de / após | the match = a partida / o jogo' },
    { q: '4. Substitua pelo verbo to be correspondente: She -> ______ at home last weekend. (passado)', voc: 'at home = em casa | last weekend = no último fim de semana' },
    { q: '5. Substitua pelo verbo to be correspondente: I -> ______ rich one day. (futuro)', voc: 'rich = rico | one day = um dia' }
  ];

  dadosGrupoA.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
      .setHelpText('Preencha com: was, were ou will be. | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);
  });

  // --- GRUPO B: Complete as Lacunas (Questões 6 a 10) ---
  var dadosGrupoB = [
    { q: '6. Yesterday, it ______ raining.', voc: 'Yesterday = ontem | raining = chovendo' },
    { q: '7. Tomorrow, they ______ on vacation.', voc: 'Tomorrow = amanhã | on vacation = de férias' },
    { q: '8. You ______ very helpful last night.', voc: 'very = muito | helpful = prestativo/ajudador | last night = ontem à noite' },
    { q: '9. I ______ surprised by the news.', voc: 'surprised = surpreso(a) | by = por/com | the news = a(s) notícia(s)' },
    { q: '10. Next month, we ______ in Paris.', voc: 'next month = no próximo mês | in Paris = em Paris' }
  ];

  dadosGrupoB.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
      .setHelpText('Preencha com a forma correta do verbo no passado (was/were) ou futuro (will be). | Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);
  });

  // --- GRUPO C: Regras (Questões 11 a 15) ---
  var dadosGrupoC = [
    { q: '11. Verdadeiro ou Falso: "Was" é a forma do passado usada com "They".' },
    { q: '12. Verdadeiro ou Falso: "Will be" indica futuro e funciona para todas as pessoas.' },
    { q: '13. Verdadeiro ou Falso: "Were" é usado no passado com "You", "We" e "They".' },
    { q: '14. Verdadeiro ou Falso: No passado, "I" é acompanhado de "were".' },
    { q: '15. Verdadeiro ou Falso: O verbo "to be" no futuro necessita do auxiliar "will".' }
  ];

  dadosGrupoC.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.q)
      .setHelpText('Responda com "Verdadeiro" ou "Falso".')
      .setRequired(true);
  });

  // --- GRUPO D: Tradução PT para EN (Questões 16 a 20) ---
  var dadosTraducaoPT_EN = [
    { num: '16', pt: 'Eu estava em casa ontem.', voc: 'Em casa = at home | Ontem = yesterday' },
    { num: '17', pt: 'Nós seremos médicos.', voc: 'Médicos = doctors' },
    { num: '18', pt: 'Eles eram muito amigos.', voc: 'Muito amigos = close friends' },
    { num: '19', pt: 'Amanhã estará ensolarado.', voc: 'Amanhã = Tomorrow | Ensolarado = sunny' },
    { num: '20', pt: 'Ela era uma ótima professora.', voc: 'Uma ótima = a great | Professora = teacher' }
  ];

  dadosTraducaoPT_EN.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Inglês: "' + itemData.pt + '"')
      .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);
  });

  // --- GRUPO E: Tradução EN para PT (Questões 21 a 25) ---
  var dadosTraducaoEN_PT = [
    { num: '21', en: 'We were very happy.', voc: 'Very = muito | Happy = felizes' },
    { num: '22', en: 'They will be late.', voc: 'Late = atrasados' },
    { num: '23', en: 'It was a beautiful day.', voc: 'A = um | Beautiful = lindo/bonito | Day = dia' },
    { num: '24', en: 'I will be at work tomorrow.', voc: 'At work = no trabalho | Tomorrow = amanhã' },
    { num: '25', en: 'You were my best student.', voc: 'My = meu | Best = melhor | Student = aluno' }
  ];

  dadosTraducaoEN_PT.forEach(function (itemData) {
    var item = form.addTextItem();
    item.setTitle(itemData.num + '. Traduza para o Português: "' + itemData.en + '"')
      .setHelpText('Vocabulário auxiliar → ' + itemData.voc)
      .setRequired(true);
  });

  Logger.log('Formulário de Aula 11B criado. URL: ' + form.getEditUrl());
}
