const mouseFollower = document.querySelector(".mouse-follower");
const pointer = document.querySelector(".pointer");

let x = 0, y = 0;
let currentMX = 0, currentMY = 0;
const radius = 15;
const lerpFactor = 0.1;

addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;
  x = clientX;
  y = clientY;
});

function far() {
  currentMX += (x - currentMX) * lerpFactor;
  currentMY += (y - currentMY) * lerpFactor;

  mouseFollower.style.transform = `translate(${currentMX - 15}px, ${currentMY - 15}px)`;

  let dx = x - currentMX;
  let dy = y - currentMY;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist > radius) {
    dx = (dx / dist) * radius;
    dy = (dy / dist) * radius;
  }
  pointer.style.transform = `translate(${dx}px, ${dy}px)`;

  requestAnimationFrame(far);
}
far();
