const audio = document.querySelector('#audio');
const control = document.querySelector('#musica');
const estado = document.querySelector('#estado');
audio.volume = 0.45;
let pausedByVisitor = false;

function actualizar() {
  const playing = !audio.paused;
  estado.textContent = playing ? 'Pausar música' : 'Activar música';
  control.setAttribute('aria-pressed', String(playing));
}
function iniciar() {
  return audio.play().catch(actualizar);
}
audio.addEventListener('play', actualizar);
audio.addEventListener('pause', actualizar);
control.addEventListener('click', () => {
  if (audio.paused) {
    pausedByVisitor = false;
    iniciar();
  } else {
    pausedByVisitor = true;
    audio.pause();
  }
});
document.addEventListener('click', event => {
  if (!pausedByVisitor && audio.paused && !control.contains(event.target)) iniciar();
});
iniciar();
