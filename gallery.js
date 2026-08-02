// Simple dependency-free image slider: autoplay + manual next/prev + dot navigation.
(function () {
  const track = document.getElementById('sliderTrack');
  const dotsContainer = document.getElementById('sliderDots');
  const sliderEl = document.getElementById('photoSlider');
  if (!track || !dotsContainer || !sliderEl) return;

  const slides = Array.from(track.children);
  const total = slides.length;
  let current = 0;
  let autoplayTimer = null;
  const AUTOPLAY_MS = 4000;

  // Build one dot per slide
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to photo ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });
  const dots = Array.from(dotsContainer.children);

  function update() {
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
  }

  function goTo(i) {
    current = ((i % total) + total) % total; // wrap around both directions
    update();
    resetAutoplay();
  }

  // Exposed globally so the prev/next buttons' onclick="" can call it
  window.slidePhoto = function (delta) {
    goTo(current + delta);
  };

  function startAutoplay() {
    autoplayTimer = setInterval(() => goTo(current + 1), AUTOPLAY_MS);
  }
  function resetAutoplay() {
    clearInterval(autoplayTimer);
    startAutoplay();
  }

  sliderEl.addEventListener('mouseenter', () => clearInterval(autoplayTimer));
  sliderEl.addEventListener('mouseleave', startAutoplay);

  update();
  startAutoplay();
})();
