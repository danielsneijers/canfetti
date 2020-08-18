// tslint:disable:no-string-literal no-any
import StreamEmitter from '../StreamEmitter';

const mockCtx = {
  save: jest.fn(),
  translate: jest.fn(),
  rotate: jest.fn(),
  fillStyle: '#fff',
  fillRect: jest.fn(),
  restore: jest.fn(),
  canvas: {
    scrollHeight: 100,
    width: 100,
  },
};

describe('StreamEmitter', () => {
  let streamEmitter;

  beforeEach(() => {
    streamEmitter = new StreamEmitter(mockCtx);
    streamEmitter.addNewParticlesToStream = jest.fn();
  });

  it('adds an initial stream of particles on inti', () => {
    expect(streamEmitter.particlesArray.length).toBe(100);
  });

  describe('drawConfetti', () => {
    it('adds new particles as long as it should render', () => {
      expect(streamEmitter.addNewParticlesToStream).not.toHaveBeenCalled();

      streamEmitter.drawConfetti();
      streamEmitter.drawConfetti();
      streamEmitter.drawConfetti();
      streamEmitter.drawConfetti();

      expect(streamEmitter.addNewParticlesToStream).toHaveBeenCalledTimes(4);
    });

    it('adds new particles as long as it should render', () => {
      expect(streamEmitter.addNewParticlesToStream).not.toHaveBeenCalled();

      streamEmitter.drawConfetti();
      streamEmitter.drawConfetti();

      expect(streamEmitter.addNewParticlesToStream).toHaveBeenCalledTimes(2);

      streamEmitter.stopDrawing();
      streamEmitter.drawConfetti();
      streamEmitter.drawConfetti();
      streamEmitter.drawConfetti();

      expect(streamEmitter.addNewParticlesToStream).toHaveBeenCalledTimes(2);
    });
  });
});
