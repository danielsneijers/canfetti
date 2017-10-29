import BaseEmitter from './BaseEmitter';
import ConfettiParticle from '../ConfettiParticle';

export default class BurstEmitter extends BaseEmitter {
  constructor(ctx: CanvasRenderingContext2D, centerX: number, centerY: number) {
    super();

    for (let i = 0; i < this.particlesAmount; i += 1) {
      this.particlesArray.push(new ConfettiParticle(ctx, centerX, centerY));
    }
  }

  public stopDrawing () {
    this.shouldRender = true;
  }
}
