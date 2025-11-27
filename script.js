function createConfettiPiece() {
  const confetti = document.createElement('div');
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor =
    `hsl(${Math.random() * 360}, 70%, 60%)`;
  confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
  return confetti;
}

function launchConfetti(count = 100) {
  const wrapper = document.getElementById('confetti-wrapper');
  for (let i = 0; i < count; i++) {
    const confetti = createConfettiPiece();
    wrapper.appendChild(confetti);
    confetti.addEventListener('animationend', () => confetti.remove());
  }
}

window.onload = () => {
  launchConfetti(80);

  const btn = document.getElementById('start-btn');
  const hiddenMsg = document.getElementById('hidden-message');
  const msgText = document.getElementById('message-text');
  const music = document.getElementById('bg-music');

  const messages = [
    "You make the world brighter just by being in it ✨",
    "Honestly, I just wanted a reason to tell you that you are really special to me 💗",
    "No more surprises... but I hope this little page made you smile 🙂"
  ];

  let index = 0;

  btn.addEventListener('click', () => {
    if (music && music.paused) {
      music.play().catch(() => {});
    }
    hiddenMsg.classList.remove('hidden');
    msgText.textContent = messages[index];
    launchConfetti(120);
    btn.textContent = "Tap the message";
  });

  msgText.addEventListener('click', () => {
    if (index < messages.length - 1) {
      index++;
      msgText.textContent = messages[index];
      launchConfetti(120);
    }
  });
};

// mouse-based parallax
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth) - 0.5;
  const y = (e.clientY / window.innerHeight) - 0.5;

  const back  = document.querySelector('.layer-back');
  const mid   = document.querySelector('.layer-mid');
  const front = document.querySelector('.layer-front');

  if (back)  back.style.transform  = `translate(${x * 30}px, ${y * 30}px) scale(1.05)`;
  if (mid)   mid.style.transform   = `translate(${x * 55}px, ${y * 55}px) scale(1.08)`;
  if (front) front.style.transform = `translate(${x * 80}px, ${y * 80}px) scale(1.12)`;
});
