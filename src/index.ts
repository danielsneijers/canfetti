import ConfettiParticle from "./Confetti";

const canvas = document.getElementById("root") as HTMLCanvasElement;
const ratio = window.devicePixelRatio;
const canvasWidth = window.innerWidth * ratio;
const canvasHeigt = window.innerHeight * ratio;

canvas.setAttribute("width", `${canvasWidth}`);
canvas.setAttribute("height", `${canvasHeigt}`);

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

ctx.scale(ratio, ratio);

const particleArray: ConfettiParticle[] = [];

for (let i = 0; i < 4000; i++) {
  particleArray.push(new ConfettiParticle(ctx, canvasWidth / 2));
}

function render() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeigt);

  particleArray.forEach((particle, _) => particle.draw());
}

function animationLoop() {
  render();
  const time = window.requestAnimationFrame(animationLoop);
}

window.requestAnimationFrame(animationLoop);
