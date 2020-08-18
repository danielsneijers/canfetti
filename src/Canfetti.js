import BurstEmitter from './emitters/BurstEmitter';
import StreamEmitter from './emitters/StreamEmitter';

class Canfetti {
  constructor({ canvasId = 'canfetti' } = {}) {
    this.canvas = document.getElementById(canvasId);
    this.canvasSize = { width: 0, height: 0 };
    this.ctx = this.canvas.getContext('2d');
    this.emitters = [];
    this.isActive = false;

    this.setCanvasSize();
    window.addEventListener('resize', this.setCanvasSize);

    return this;
  }

  setCanvasSize = () => {
    const pixelRatio = window.devicePixelRatio;
    const width = window.innerWidth * pixelRatio;
    const height = window.innerHeight * pixelRatio;

    this.canvasSize = { width, height };
    this.canvas.setAttribute('width', `${width}`);
    this.canvas.setAttribute('height', `${height}`);
    this.ctx.scale(pixelRatio, pixelRatio);
  };

  startStream = () => {
    this.emitters.push(new StreamEmitter(this.ctx));

    if (!this.isActive) {
      this.isActive = true;
      this.render();
    }

    return this;
  };

  initBurst = () => {
    window.addEventListener('click', this.addBurstEmitter);

    if (!this.isActive) {
      this.isActive = true;
      this.render();
    }

    return this;
  };

  stopStream = () => {
    this.emitters.forEach((emitter) => emitter.stopDrawing());
  };

  addBurstEmitter = ({ clientX, clientY }) => {
    this.emitters.push(new BurstEmitter(this.ctx, clientX, clientY));

    if (!this.isActive) {
      this.isActive = true;
      this.render();
    }
  };

  render = () => {
    if (this.allEmittersDoneRendering) {
      this.isActive = false;
    }

    if (this.emitters.length) {
      const { width, height } = this.canvasSize;

      this.ctx.clearRect(0, 0, width, height);
      this.emitters.forEach(this.drawEmitterParticles);

      window.requestAnimationFrame(this.render);
    }
  };

  drawEmitterParticles = (emitter, index) => {
    if (emitter.isDoneRendering) {
      this.emitters.splice(index, 1);
    } else {
      emitter.drawConfetti();
    }
  };

  get allEmittersDoneRendering() {
    return this.emitters.every((emitter) => emitter.isDoneRendering);
  }
}

export default Canfetti;