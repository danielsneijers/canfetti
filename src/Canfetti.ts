import BurstEmitter from './emitters/BurstEmitter';
import StreamEmitter from './emitters/StreamEmitter';

export default class Canfetti {
  private canvas: HTMLCanvasElement;
  private canvasSize: { width: number; height: number };
  private ctx: CanvasRenderingContext2D;
  private emitters: (BurstEmitter | StreamEmitter)[] = [];
  private isActive: boolean = false;

  constructor({ canvasId = 'root' }: { canvasId?: string } = {}) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
    this.setCanvasSize();

    return this;
  }

  public setCanvasSize() {
    const pixelRatio = window.devicePixelRatio;
    const width = window.innerWidth * pixelRatio;
    const height = window.innerHeight * pixelRatio;

    this.canvasSize = { width, height };
    this.canvas.setAttribute('width', `${width}`);
    this.canvas.setAttribute('height', `${height}`);
    this.ctx.scale(pixelRatio, pixelRatio);
  }

  public initStream = () => {
    this.emitters.push(new StreamEmitter(this.ctx));

    return this;
  }

  public initBurst = () => {
    window.addEventListener('click', this.addBurstEmitter);    

    return this;
  }

  public start = () => {
    console.log(this.isActive)
    if (!this.isActive) {
      this.isActive = true;
      this.emitters.forEach(emitter => emitter.startDrawing());    
      this.render();
    }
    console.log(this.isActive)
  }

  public stop = () => {
    if (this.isActive) {
      this.isActive = false;
      this.emitters.forEach(emitter => emitter.stopDrawing());
    }
  }

  private addBurstEmitter = ({ clientX, clientY }: MouseEvent) => {
    this.emitters.push(new BurstEmitter(this.ctx, clientX, clientY));
  };

  private render = () => {
    if (!this.emittersDoneRendering) {
      const { width, height } = this.canvasSize;
    
      this.ctx.clearRect(0, 0, width, height);
      this.emitters.forEach(this.drawEmitterParticles);

      window.requestAnimationFrame(this.render);
    }
  }

  private drawEmitterParticles = (emitter: (BurstEmitter | StreamEmitter), index: number) => {
    if (emitter.isDoneRendering) {
      this.emitters.splice(index, 1);
    } else {
      emitter.drawConfetti();
    }
  }

  private get emittersDoneRendering () {
    return this.emitters.every(emitter => emitter.isDoneRendering);
  }
}