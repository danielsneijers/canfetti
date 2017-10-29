import BaseEmitter from './BaseEmitter';
import ConfettiParticle from '../ConfettiParticle';
// import Vector from '../models/Vector';

export default class StreamEmitter extends BaseEmitter {
  constructor(public ctx: CanvasRenderingContext2D, public isSetup: boolean = false) {
    super();
  }

  private get randomCenterX () {
    return Math.floor(Math.random() * this.ctx.canvas.width);
  }

  public setupConfetti () {
    this.particlesArray = [];

    for (let i = 0; i < this.particlesAmount / 2; i += 1) {
      this.particlesArray.push(
        new ConfettiParticle(this.ctx, this.randomCenterX, -10),
      );
    }

    this.isSetup = true;
  }

  public drawConfetti() {
    if (!this.isSetup) {
      this.setupConfetti();      
    }

    if (this.shouldRender) {
      this.addNewParticlesToStream();
    }

    super.drawConfetti();
  }

  private addNewParticlesToStream = () => {
    for (let i = 0; i < this.particlesAmount / 60; i += 1) {
      this.particlesArray.push(
        new ConfettiParticle(this.ctx, this.randomCenterX, -10),
      );
    }
  }
}
