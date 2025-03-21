const versiculos = [
    "O Senhor é meu pastor, nada me faltará. (Salmos 23:1)",
    "Aquietai-vos e sabei que eu sou Deus. (Salmos 46:10)",
    "Tudo posso naquele que me fortalece. (Filipenses 4:13)",
    "Não temas, porque eu sou contigo. (Isaías 41:10)",
    "Lâmpada para os meus pés é a tua palavra. (Salmos 119:105)",
    "Cria em mim um coração puro, ó Deus. (Salmos 51:10)",
    "Buscai primeiro o Reino de Deus. (Mateus 6:33)",
    "Entrega o teu caminho ao Senhor. (Salmos 37:5)",
    "O Espírito Santo testifica com o nosso espírito. (Romanos 8:16)"
  ];
  
  const perguntas = [
    "O que este versículo revela sobre o caráter de Deus?",
    "Como posso aplicar essa verdade na minha rotina de hoje?",
    "O que o Espírito Santo está me dizendo através dessa Palavra?",
    "Esse versículo confronta ou confirma algo em mim?",
    "Como posso viver esse versículo de forma prática?",
    "Esse texto me chama a confiar, obedecer ou esperar?",
    "Existe alguma área da minha vida que precisa alinhar com essa verdade?"
  ];
  
  function gerarVersiculo() {
    const random = Math.floor(Math.random() * versiculos.length);
    document.getElementById("versiculo").textContent = versiculos[random];
  }
  
  function gerarPergunta() {
    const random = Math.floor(Math.random() * perguntas.length);
    document.getElementById("pergunta").textContent = perguntas[random];
  }