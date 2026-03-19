// ── Progress Bar ──────────────────────────────
const progressBar = document.getElementById('progressBar');
const currTime    = document.getElementById('curr');

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return m + ':' + String(s).padStart(2, '0');
}

progressBar.addEventListener('input', () => {
  currTime.textContent = formatTime(parseInt(progressBar.value));
});

// ── Like / Heart Toggle ────────────────────────
const heartBtn = document.getElementById('heartBtn');
heartBtn.addEventListener('click', () => {
  heartBtn.classList.toggle('liked');
});

// ── Nav Active State ──────────────────────────
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
  });
});
