export default class BaseEmitter {
  particlesArray = [];

  particlesAmount = 200;

  particlesOutViewport = 0;

  shouldRender = true;

  get isDoneRendering() {
    return this.particlesArray.length
      ? this.particlesArray.length === this.particlesOutViewport
      : false;
  }

  stopDrawing() {
    this.shouldRender = false;
  }

  startDrawing() {
    this.shouldRender = true;
  }

  drawConfetti() {
    if (this.isDoneRendering) {
      this.particlesArray = [];
      return;
    }

    this.particlesOutViewport = 0;
    this.particlesArray.forEach(this.drawParticleWhenInViewport);
  }

  drawParticleWhenInViewport = (particle) => {
    if (!particle.inViewport) {
      this.particlesOutViewport += 1;
    }

    particle.draw();
  };
}
