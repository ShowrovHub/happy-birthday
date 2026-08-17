// 3 Second por Intro bonding hide hoye Main Canvas dekhabe
setTimeout(function() {
  var intro = document.getElementById('vscode-intro');
  var canvas = document.getElementById('main-canvas');
  
  if (intro) intro.style.display = 'none';
  if (canvas) canvas.classList.remove('hidden');

  // Confetti trigger
  try {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
  } catch (e) {
    console.log("Confetti loaded");
  }
}, 3000);

function openCard() {
  document.getElementById('cardModal').style.display = 'flex';
}

function openEnvelope() {
  document.getElementById('envelopeModal').style.display = 'flex';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function triggerLovePopups() {
  try {
    confetti({ particleCount: 60, spread: 90, colors: ['#ff4757', '#e84393'] });
  } catch(e) {}
  alert("💌 Love Note: You are truly special!");
}
