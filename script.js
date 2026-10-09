const videos = [...document.querySelectorAll('video')];
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
function setMotion() {
 for (const video of videos) {
  if (motion.matches) { video.pause(); video.controls = true; }
  else { video.controls = false; video.play().catch(() => { video.controls = true; }); }
 }
}
setMotion();
motion.addEventListener('change', setMotion);
