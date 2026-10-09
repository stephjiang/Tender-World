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

const headline = document.querySelector('.statement h1');
if (headline) {
 const sharp = document.createElement('span');
 sharp.className = 'headline-ink headline-sharp';
 sharp.append(...headline.childNodes);
 const blur = sharp.cloneNode(true);
 blur.className = 'headline-ink headline-blur';
 blur.setAttribute('aria-hidden', 'true');
 const blurLayer = document.createElement('span');
 blurLayer.className = 'headline-blur-layer';
 blurLayer.setAttribute('aria-hidden', 'true');
 blurLayer.append(blur);
 headline.append(sharp, blurLayer);
 headline.addEventListener('pointermove', (event) => {
  if (event.pointerType === 'touch') return;
  const bounds = headline.getBoundingClientRect();
  headline.style.setProperty('--cursor-x', `${event.clientX - bounds.left}px`);
  headline.style.setProperty('--cursor-y', `${event.clientY - bounds.top}px`);
  headline.style.setProperty('--blur-x', `${event.clientX - bounds.left + 24}px`);
  headline.style.setProperty('--blur-y', `${event.clientY - bounds.top + 24}px`);
  headline.classList.add('is-hovering');
 });
 const clearBlur = () => headline.classList.remove('is-hovering');
 headline.addEventListener('pointerleave', clearBlur);
 headline.addEventListener('pointercancel', clearBlur);
 window.addEventListener('blur', clearBlur);
}
