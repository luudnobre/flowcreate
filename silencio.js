const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("startButton");
let duration = 3 * 60; // 3 minutos
let interval;

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function startTimer() {
  clearInterval(interval);
  let remaining = duration;
  timerDisplay.textContent = formatTime(remaining);

  interval = setInterval(() => {
    remaining--;
    timerDisplay.textContent = formatTime(remaining);
    if (remaining <= 0) {
      clearInterval(interval);
      alert("Seu tempo de silêncio foi completado com o Espírito 🕊️");
    }
  }, 1000);
}

startButton.addEventListener("click", startTimer);
