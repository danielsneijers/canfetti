import ConfettiParticle from '../ConfettiParticle';

export default class BaseEmitter {
  public particlesArray: ConfettiParticle[] = [];
  public particlesAmount: number = 200;
  public invisibleParticles: number = 0;
  public shouldRender: boolean = true;
  
  public get isDoneRendering() {
    return this.particlesAmount === this.invisibleParticles;
  }

  public stopDrawing () {
    this.shouldRender = false;
  }

  public startDrawing () {
    this.shouldRender = true;
  }

  public drawConfetti() {
    this.invisibleParticles = 0;

    if (this.shouldRender && !this.isDoneRendering) {
      this.particlesArray.forEach(
        (particle, i) =>
          particle.inViewport ? particle.draw() : (this.invisibleParticles += 1),
      );
    }
  }
}
