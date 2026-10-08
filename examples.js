const carousel = document.querySelector('.examples-carousel');

if (carousel) {
  const track = carousel.querySelector('.problem-catalog');
  const controls = carousel.querySelector('.examples-scrollbar');
  const slider = controls.querySelector('input');
  const cards = [...track.querySelectorAll('.problem-card')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function syncPosition() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const visible = Math.round(track.clientWidth / cardWidth);
    const max = Math.max(0, cards.length - visible);
    const position = Math.min(max, Math.max(0, Math.round(track.scrollLeft / cardWidth)));
    slider.max = String(max);
    slider.value = String(position);
    slider.setAttribute('aria-valuetext', `Examples ${position + 1} to ${Math.min(cards.length, position + visible)} of ${cards.length}`);
    controls.hidden = max === 0;
  }

  slider.addEventListener('input', () => {
    const cardWidth = cards[0].getBoundingClientRect().width;
    track.scrollTo({
      left: Number(slider.value) * cardWidth,
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
    });
  });

  track.addEventListener('scroll', syncPosition, { passive: true });
  track.addEventListener('scrollend', () => {
    const viewport = track.getBoundingClientRect();
    cards.forEach((card) => {
      const bounds = card.getBoundingClientRect();
      if (bounds.right <= viewport.left + 1 || bounds.left >= viewport.right - 1) {
        card.querySelector('details').open = false;
      }
    });
  });
  new ResizeObserver(syncPosition).observe(track);
  carousel.setAttribute('data-enhanced', '');
  syncPosition();
}
