import BaseEmitter from './BaseEmitter';
import ConfettiParticle from '../ConfettiParticle';

export default class BurstEmitter extends BaseEmitter {
  constructor(ctx, centerX, centerY) {
    super();

    for (let i = 0; i < this.particlesAmount; i += 1) {
      this.particlesArray.push(new ConfettiParticle(ctx, centerX, centerY));
    }
  }
}
