import ConfettiParticle from '../ConfettiParticle';

export default class BaseEmitter {
  public particlesArray: ConfettiParticle[] = [];
  public particlesAmount: number = 200;
  public invisibleParticles: number = 0;
  public shouldRender: boolean = true;
  
  public get isDoneRendering() {
    return this.particlesArray.length ?
      this.particlesArray.length === this.invisibleParticles :
      false;
  }

  public stopDrawing () {
    this.shouldRender = false;
  }

  public startDrawing () {
    this.shouldRender = true;
  }

  public drawConfetti() {
    if (this.isDoneRendering) {
      this.particlesArray = [];
      return;
    }

    this.invisibleParticles = 0;    
    this.particlesArray.forEach(this.drawParticleWhenInViewport);
  }

  private drawParticleWhenInViewport = (particle: ConfettiParticle) => {
    if (!particle.inViewport) {
      this.invisibleParticles += 1;
    }

    particle.draw();
  }
}
