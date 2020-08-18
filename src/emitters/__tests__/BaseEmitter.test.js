// tslint:disable:no-string-literal no-any
import BaseEmitter from '../BaseEmitter';

describe('BaseEmitter', () => {
  const fakeParticle = {};

  let baseEmitter;
  let particlesArray;

  beforeEach(() => {
    particlesArray = Array(10)
      .fill(0)
      .map(() => fakeParticle);

    baseEmitter = new BaseEmitter();
    baseEmitter.particlesArray = particlesArray;
  });

  describe('isDoneRendering', () => {
    it('returns false on init', () => {
      expect(baseEmitter.isDoneRendering).toBeFalsy();
    });

    it('is returns false if done rendering', () => {
      baseEmitter.particlesOutViewport = 7;

      expect(baseEmitter.isDoneRendering).toBeFalsy();
    });

    it('is returns true if done rendering', () => {
      baseEmitter.particlesOutViewport = 10;

      expect(baseEmitter.isDoneRendering).toBeTruthy();
    });
  });

  describe('drawConfetti', () => {
    beforeEach(() => {
      baseEmitter.drawParticleWhenInViewport = jest.fn();
    });

    it('does not render if all particles are out of viewport', () => {
      baseEmitter.particlesOutViewport = 10;

      expect(baseEmitter.drawParticleWhenInViewport).not.toHaveBeenCalled();

      baseEmitter.drawConfetti();

      expect(baseEmitter.drawParticleWhenInViewport).not.toHaveBeenCalled();
    });

    it('does render if particles in viewport', () => {
      expect(baseEmitter.drawParticleWhenInViewport).not.toHaveBeenCalled();

      baseEmitter.drawConfetti();

      expect(baseEmitter.drawParticleWhenInViewport).toHaveBeenCalledTimes(10);
    });
  });
});
