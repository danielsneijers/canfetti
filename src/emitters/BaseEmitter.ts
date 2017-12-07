import ConfettiParticle from '../ConfettiParticle';

export default class BaseEmitter {
  public particlesArray: ConfettiParticle[] = [];
  public particlesAmount: number = 200;
  public particlesOutViewport: number = 0;
  public shouldRender: boolean = true;

  public get isDoneRendering() {
    return this.particlesArray.length
      ? this.particlesArray.length === this.particlesOutViewport
      : false;
  }

  public stopDrawing() {
    this.shouldRender = false;
  }

  public startDrawing() {
    this.shouldRender = true;
  }

  public drawConfetti() {
    if (this.isDoneRendering) {
      this.particlesArray = [];
      return;
    }

    this.particlesOutViewport = 0;
    this.particlesArray.forEach(this.drawParticleWhenInViewport);
  }

  private drawParticleWhenInViewport = (particle: ConfettiParticle) => {
    if (!particle.inViewport) {
      this.particlesOutViewport += 1;
    }

    particle.draw();
  };
}
