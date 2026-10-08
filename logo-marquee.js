const companiesSection = document.querySelector('.companies-section');
const companiesPause = companiesSection?.querySelector('.companies-pause');

if (companiesPause) {
  companiesPause.hidden = false;
  companiesPause.addEventListener('click', () => {
    const paused = companiesSection.classList.toggle('is-paused');
    companiesPause.setAttribute('aria-pressed', String(paused));
    companiesPause.setAttribute('aria-label', paused ? 'Resume logo animation' : 'Pause logo animation');
    companiesPause.firstElementChild.textContent = paused ? '▶' : 'Ⅱ';
  });
}
