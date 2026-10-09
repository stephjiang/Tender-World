const video = document.querySelector('video');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
function setMotion(){ if(motion.matches) { video.pause(); video.controls = true; } else { video.controls = false; video.play().catch(()=>{video.controls=true;}); } }
setMotion(); motion.addEventListener('change',setMotion);
