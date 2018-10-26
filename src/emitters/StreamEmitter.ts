import BaseEmitter from './BaseEmitter';
import ConfettiParticle from '../ConfettiParticle';

export default class StreamEmitter extends BaseEmitter {
  constructor(public ctx: CanvasRenderingContext2D) {
    super();

    for (let i = 0; i < this.particlesAmount / 2; i += 1) {
      this.particlesArray.push(
        new ConfettiParticle(this.ctx, this.randomCenterX, -10)
      );
    }
  }

  private get randomCenterX() {
    return Math.floor(Math.random() * this.ctx.canvas.width);
  }

  public drawConfetti() {
    if (this.shouldRender) {
      this.addNewParticlesToStream();
    }

    super.drawConfetti();
  }

  private addNewParticlesToStream = () => {
    for (let i = 0; i < this.particlesAmount / 60; i += 1) {
      this.particlesArray.push(
        new ConfettiParticle(this.ctx, this.randomCenterX, -10)
      );
    }
  };
}
