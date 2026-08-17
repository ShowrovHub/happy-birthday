setTimeout(() => {
  document.getElementById('vscode-intro').style.display = 'none';
  document.getElementById('main-canvas').classList.remove('hidden');

  setTimeout(() => {
    confetti({ particleCount: 60, spread: 70, origin: { y: 0.6 } });
  }, 300);
}, 3000);

function openCard() { document.getElementById('cardModal').style.display = 'flex'; }
function openEnvelope() { document.getElementById('envelopeModal').style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function triggerLovePopups() {
  confetti({ particleCount: 50, spread: 90, colors: ['#ff4757', '#e84393'] });
  alert("💌 Love Note: You are truly special!");
}
