const dicas = [
    "Envie uma mensagem de encorajamento para alguém hoje.",
    "Doe algo que você ama para quem precisa.",
    "Ore por alguém que te magoou e libere perdão.",
    "Tire 10 minutos para escutar alguém de verdade.",
    "Faça algo criativo para expressar sua fé.",
    "Ofereça ajuda a um vizinho ou colega.",
    "Anote 3 motivos de gratidão e compartilhe com Deus.",
    "Desconecte-se da tecnologia por 1 hora e contemple a criação.",
    "Escreva uma carta de amor a Deus como forma de oração.",
    "Doe tempo para uma ação voluntária ou pequena gentileza."
  ];
  
  function gerarDica() {
    const index = Math.floor(Math.random() * dicas.length);
    document.getElementById("dica").textContent = dicas[index];
    document.getElementById("toggleTheme").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
      });
      
  }
  