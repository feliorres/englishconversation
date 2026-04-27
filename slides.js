/* ══════════════════════════════════════════════
   Slides Engine — Shared JS
   ══════════════════════════════════════════════ */
(function () {
  let current = 0;
  const slides = document.querySelectorAll('.slide');
  const total = slides.length;
  const dotsContainer = document.getElementById('progressDots');

  // Build progress dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateUI() {
    const dots = dotsContainer.querySelectorAll('.dot');
    slides.forEach((s, i) => {
      s.classList.remove('active');
      dots[i].classList.remove('active');
      if (i === current) {
        s.classList.add('active');
        dots[i].classList.add('active');
      }
    });
    document.getElementById('btnPrev').disabled = current === 0;
    document.getElementById('btnNext').disabled = current === total - 1;
    document.getElementById('navCounter').textContent = `${current + 1} / ${total}`;
  }

  function changeSlide(dir) {
    const next = current + dir;
    if (next < 0 || next >= total) return;
    current = next;
    updateUI();
  }

  function goToSlide(index) {
    if (index < 0 || index >= total) return;
    current = index;
    updateUI();
  }

  // Expose to inline onclick handlers
  window.changeSlide = changeSlide;

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); changeSlide(1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); changeSlide(-1); }
  });
})();
