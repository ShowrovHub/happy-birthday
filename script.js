// Auto Dynamic Scaling for Mobile Screens
function autoScaleApp() {
  const wrapper = document.getElementById('app-wrapper');
  const targetWidth = 800;
  const targetHeight = 450;
  
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  const scaleX = windowWidth / targetWidth;
  const scaleY = windowHeight / targetHeight;
  
  // Choose smaller scale factor to fit screen
  const scale = Math.min(scaleX, scaleY) * 0.95;
  wrapper.style.transform = `scale(${scale})`;
}

window.addEventListener('resize', autoScaleApp);
window.addEventListener('DOMContentLoaded', () => {
  autoScaleApp();
  
  // Transition after Intro (00:03)
  setTimeout(() => {
    document.getElementById('vscode-intro').style.display = 'none';
    document.getElementById('main-canvas').classList.remove('hidden');

    // Confetti Animation on Cake Drop
    setTimeout(() => {
      confetti({ particleCount: 70, spread: 80, origin: { y: 0.6 } });
    }, 400);

  }, 3200);
});

function openCard() { document.getElementById('cardModal').style.display = 'flex'; }
function openEnvelope() { document.getElementById('envelopeModal').style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function triggerLovePopups() {
  confetti({ particleCount: 60, spread: 100, colors: ['#ff4757', '#e84393'] });
  alert("💌 Love Note: You are truly special!");
}

