import BaseEmitter from './BaseEmitter';
import ConfettiParticle from '../ConfettiParticle';

export default class StreamEmitter extends BaseEmitter {
  constructor(ctx) {
    super();

    this.ctx = ctx;

    for (let i = 0; i < this.particlesAmount / 2; i += 1) {
      this.particlesArray.push(
        new ConfettiParticle(this.ctx, this.randomCenterX, -10)
      );
    }
  }

  get randomCenterX() {
    return Math.floor(Math.random() * this.ctx.canvas.width);
  }

  drawConfetti() {
    if (this.shouldRender) {
      this.addNewParticlesToStream();
    }

    super.drawConfetti();
  }

  addNewParticlesToStream = () => {
    for (let i = 0; i < this.particlesAmount / 60; i += 1) {
      this.particlesArray.push(
        new ConfettiParticle(this.ctx, this.randomCenterX, -10)
      );
    }
  };
}
