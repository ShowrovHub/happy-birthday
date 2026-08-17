// Step 1 -> Step 2 & 3 Transition
setTimeout(() => {
  document.getElementById('vscode-intro').style.display = 'none';
  const mainStage = document.getElementById('main-stage');
  mainStage.classList.remove('hidden');

  // Trigger Confetti when Cake lands (00:04 - 00:06)
  setTimeout(() => {
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
  }, 500);

  // Background switches to Pink Grid (00:07)
  setTimeout(() => {
    mainStage.classList.add('grid-bg');
  }, 2000);

}, 3300);

// Modal Controls
function openCard() {
  document.getElementById('cardModal').style.display = 'flex';
}

function openEnvelope() {
  document.getElementById('envelopeModal').style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

// Step 5: Love Cards Pop-up
function triggerLovePopups() {
  confetti({ particleCount: 50, spread: 100, origin: { y: 0.5 }, colors: ['#ff4757', '#e84393'] });
  alert("💌 Love Notes: You are amazing! Have a magical Birthday! ✨");
}
