// tslint:disable:no-string-literal no-any
import BurstEmitter from '../BurstEmitter';

const mockCtx = {
  save: jest.fn(),
  translate: jest.fn(),
  rotate: jest.fn(),
  fillStyle: '#fff',
  fillRect: jest.fn(),
  restore: jest.fn(),
  canvas: {
    scrollHeight: 100,
  },
} as any;

describe('BurstEmitter', () => {
  it('instantly adds 200 particles', () => {
    const emitter = new BurstEmitter(mockCtx, 100, 100);

    expect(emitter.particlesArray.length).toBe(200);
  });
});
