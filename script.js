function showSurprise() {
  const surprise = document.getElementById("surprise");
  const message = document.getElementById("message");

  surprise.classList.remove("hidden");
  message.innerHTML = "Surprise! This special wish is just for you 💖";

  createBalloons();
  createConfetti();
}

function createBalloons() {
  const balloons = ["🎈", "🎈", "🎈", "💖", "⭐"];

  for (let i = 0; i < 15; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.innerHTML = balloons[Math.floor(Math.random() * balloons.length)];

    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = 4 + Math.random() * 4 + "s";

    document.body.appendChild(balloon);

    setTimeout(() => {
      balloon.remove();
    }, 8000);
  }
}

function createConfetti() {
  const confettiItems = ["🎉", "✨", "💫", "🎊", "⭐"];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.innerHTML = confettiItems[Math.floor(Math.random() * confettiItems.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}