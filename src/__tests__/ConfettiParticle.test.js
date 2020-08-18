import ConfettiParticle from '../ConfettiParticle';

jest.mock('../utils/colors.js');

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
};

describe('ConfettiParticle', () => {
  let particleInViewport;
  let particleOutViewport;

  beforeAll(() => {
    global.Math.random = jest.fn(() => 0.6522531586373328);
  });

  afterAll(() => {
    global.Math.random.mockRestore();
  });

  beforeEach(() => {
    particleInViewport = new ConfettiParticle(mockCtx, 58, 23);
    particleOutViewport = new ConfettiParticle(mockCtx, 78, 100);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('initiates with ctx and default values', () => {
      const particle = new ConfettiParticle(mockCtx);
      expect(particle).toMatchSnapshot();
    });
  });

  describe('inViewport', () => {
    it('returns true if particle is in viewport', () => {
      const particle2 = new ConfettiParticle(mockCtx, 16, 99);

      expect(particleInViewport.inViewport).toBe(true);
      expect(particle2.inViewport).toBe(true);
    });

    it('returns false if particle is not in viewport', () => {
      const particle2 = new ConfettiParticle(mockCtx, 32, 264);

      expect(particleOutViewport.inViewport).toBe(false);
      expect(particle2.inViewport).toBe(false);
    });
  });

  describe('draw', () => {
    it('draws when particle is in viewport', () => {
      expect(mockCtx.translate).not.toHaveBeenCalled();
      expect(mockCtx.rotate).not.toHaveBeenCalled();
      expect(mockCtx.fillRect).not.toHaveBeenCalled();

      particleInViewport.draw();

      expect(mockCtx.translate).toHaveBeenCalled();
      expect(mockCtx.rotate).toHaveBeenCalled();
      expect(mockCtx.fillRect).toHaveBeenCalled();
    });

    it('does not draw when particle is out of viewport', () => {
      expect(mockCtx.translate).not.toHaveBeenCalled();
      expect(mockCtx.rotate).not.toHaveBeenCalled();
      expect(mockCtx.fillRect).not.toHaveBeenCalled();

      particleOutViewport.draw();

      expect(mockCtx.translate).not.toHaveBeenCalled();
      expect(mockCtx.rotate).not.toHaveBeenCalled();
      expect(mockCtx.fillRect).not.toHaveBeenCalled();
    });
  });
});
