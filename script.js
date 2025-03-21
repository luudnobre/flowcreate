let usuarioId = localStorage.getItem("usuarioId") || null;

function register() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const usuario = { email, senha };
  localStorage.setItem("usuario", JSON.stringify(usuario));
  alert("Conta criada com sucesso!");
}

function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (usuario && usuario.email === email && usuario.senha === senha) {
    usuarioId = email;
    localStorage.setItem("usuarioId", usuarioId);
    alert("Login realizado com sucesso!");
    carregarEntradas();
  } else {
    alert("Email ou senha incorretos.");
  }
}

function logout() {
  localStorage.removeItem("usuarioId");
  location.reload();
}

function salvarEntrada() {
  const entrada = document.getElementById("entrada").value;
  if (!entrada.trim()) return;
  const entradasSalvas = JSON.parse(localStorage.getItem("entradas_" + usuarioId)) || [];
  entradasSalvas.push(entrada);
  localStorage.setItem("entradas_" + usuarioId, JSON.stringify(entradasSalvas));
  document.getElementById("entrada").value = "";
  carregarEntradas();
}

function carregarEntradas() {
  if (!usuarioId) return;
  const entradas = JSON.parse(localStorage.getItem("entradas_" + usuarioId)) || [];
  const div = document.getElementById("entradas");
  div.innerHTML = "";
  entradas.forEach(texto => {
    const p = document.createElement("p");
    p.textContent = "🪶 " + texto;
    div.appendChild(p);
  });
}

function exportarPDF() {
  const entradas = JSON.parse(localStorage.getItem("entradas_" + usuarioId)) || [];
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFont("Courier", "normal");
  doc.setFontSize(12);
  doc.text("Diário - Sopro Criativo\n", 10, 10);
  let y = 20;
  entradas.forEach((e, i) => {
    doc.text(`${i + 1}. ${e}`, 10, y);
    y += 10;
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
  });
  doc.save("meu-diario.pdf");
}

function animarCanvas() {
  const canvas = document.getElementById("visual-effect");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const estrelas = [];

  for (let i = 0; i < 80; i++) {
    estrelas.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2,
      dx: Math.random() * 0.5,
      dy: Math.random() * 0.5
    });
  }

  function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    estrelas.forEach(e => {
      ctx.beginPath();
      ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
      ctx.fillStyle = "#aa00ff";
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#aa00ff";
      ctx.fill();
      e.x += e.dx;
      e.y += e.dy;
      if (e.x > canvas.width) e.x = 0;
      if (e.y > canvas.height) e.y = 0;
    });
    requestAnimationFrame(desenhar);
  }

  desenhar();
}

window.onload = () => {
  carregarEntradas();
  animarCanvas();
};
function gerarFrasesAleatorias() {
    const frases = [
      "Aquietai-vos e sabei que eu sou Deus. (Salmos 46:10)",
      "O Senhor é o meu pastor; nada me faltará. (Salmos 23:1)",
      "Cria em mim, ó Deus, um coração puro. (Salmos 51:10)",
      "O Espírito Santo testifica com o nosso espírito. (Romanos 8:16)",
      "Fé é a certeza do que se espera. (Hebreus 11:1)",
      "Tudo posso naquele que me fortalece. (Filipenses 4:13)",
      "Se Deus é por nós, quem será contra nós? (Romanos 8:31)"
    ];
    const aleatoria = frases[Math.floor(Math.random() * frases.length)];
    document.getElementById("fraseTopo").textContent = `📖 ${aleatoria}`;
  }
  
  document.getElementById("toggleMode").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  
  window.onload = () => {
    carregarEntradas();
    animarCanvas();
    gerarFrasesAleatorias();
  };
  
  function mostrarEtapa(id) {
    const todas = document.querySelectorAll(".etapa-box");
    todas.forEach(div => div.classList.add("hidden"));
    document.getElementById(id).classList.remove("hidden");
  }
  document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  