const textarea = document.getElementById("blocoEscrita");
const mensagens = document.getElementById("mensagens");
const barra = document.getElementById("barra");

// Carrega texto salvo
window.onload = () => {
  const textoSalvo = localStorage.getItem("diarioCriativo");
  if (textoSalvo) {
    textarea.value = textoSalvo;
    atualizarProgresso();
  }
};

function salvarTexto() {
  const texto = textarea.value.trim();
  if (texto.length > 0) {
    localStorage.setItem("diarioCriativo", texto);
    mensagens.textContent = "✅ Reflexão salva com sucesso.";
    atualizarProgresso();
  } else {
    mensagens.textContent = "⚠️ Escreva algo para poder salvar.";
  }
}

function limparTexto() {
  textarea.value = "";
  mensagens.textContent = "✖️ Texto limpo.";
  barra.value = 0;
  localStorage.removeItem("diarioCriativo");
}

function atualizarProgresso() {
  const total = textarea.value.length;
  const limite = 1000;
  const porcentagem = Math.min((total / limite) * 100, 100);
  barra.value = porcentagem;
}
