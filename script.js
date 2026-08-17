// ১. কেক উড়ার অ্যানিমেশনের সাথে কনফেটি/স্পার্কল ফায়ার করা
window.addEventListener('DOMContentLoaded', () => {
  // কেক উড়ার সময় স্পার্কল অ্যানিমেশন
  let sparkInterval = setInterval(() => {
    confetti({
      particleCount: 8,
      spread: 60,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#ff4757', '#ff6b81', '#ffffff']
    });
  }, 200);

  // ২.৫ সেকেন্ড পর মেইন কার্ড পেজটি অন হবে
  setTimeout(() => {
    clearInterval(sparkInterval);
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');

    // বড় সেলিব্রেশন কনফেটি
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 }
    });
  }, 2500);
});

// কেকে ক্লিক করলে হার্ট অ্যানিমেশন দেওয়া
function triggerHearts() {
  confetti({
    particleCount: 40,
    spread: 80,
    origin: { y: 0.6 },
    colors: ['#ff4757', '#e84393']
  });
}

// মোডাল ফাংশনালিটি
function openEnvelope() {
  document.getElementById('envelopeModal').style.display = 'flex';
  triggerHearts();
}

function openGreetingCard() {
  document.getElementById('cardModal').style.display = 'flex';
  triggerHearts();
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
