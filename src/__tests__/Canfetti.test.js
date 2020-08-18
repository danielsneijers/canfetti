import Canfetti from '../Canfetti';

const mockCtx = {
  save: jest.fn(),
  scale: jest.fn(),
  translate: jest.fn(),
  rotate: jest.fn(),
  fillStyle: '#fff',
  fillRect: jest.fn(),
  restore: jest.fn(),
  canvas: {
    scrollHeight: 100,
  },
};

const mockCanvas = {
  getContext: jest.fn(() => mockCtx),
  setAttribute: jest.fn(),
};

describe('Canfetti', () => {
  let confetti;
  let getElementSpy;
  let eventListenerSpy;

  beforeAll(() => {
    getElementSpy = jest
      .spyOn(document, 'getElementById')
      .mockImplementation(() => mockCanvas);

    eventListenerSpy = jest.spyOn(window, 'addEventListener');
  });

  beforeEach(() => {
    eventListenerSpy.mockClear();
    mockCanvas.setAttribute.mockClear();

    confetti = new Canfetti();
  });

  afterAll(() => {
    getElementSpy.mockRestore();
    eventListenerSpy.mockRestore();
  });

  it('sets canvas size and resolution on init', () => {
    expect(mockCanvas.setAttribute).toHaveBeenCalledTimes(2);
    expect(mockCtx.scale).toHaveBeenCalled();
  });

  it('resizes on window resizes', () => {
    expect(eventListenerSpy).toHaveBeenCalledWith(
      'resize',
      confetti.setCanvasSize,
    );
  });

  describe('setCanvasSize', () => {
    it('sets canvas size and resolution', () => {
      mockCanvas.setAttribute.mockClear();
      mockCtx.scale.mockClear();

      expect(mockCanvas.setAttribute).not.toHaveBeenCalled();
      expect(mockCtx.scale).not.toHaveBeenCalled();

      confetti.setCanvasSize();

      expect(mockCanvas.setAttribute).toHaveBeenCalledTimes(2);
      expect(mockCtx.scale).toHaveBeenCalled();
    });
  });
});
