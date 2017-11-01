import { randomColor } from './utils/colors';
import Vector from './models/Vector';

export default class ConfettiParticle {
  private sqWidth: number = 20;
  private sqHeight: number = 20;
  private rotationDegree: number = 0;
  private substract: boolean = true;
  private dt: number = 0.016;
  private color: string;
  private ctx: CanvasRenderingContext2D;

  private position: Vector;
  private velocity: Vector = new Vector(0, 1);
  private gravity: Vector = new Vector(0, 9.8);

  constructor(
    ctx: CanvasRenderingContext2D,
    x: number = 0,
    y: number = 0,
  ) {
    const r = Math.random() * Math.PI * 2;

    this.ctx = ctx;
    this.position = new Vector(x, y);
    this.color = randomColor();
    this.velocity = new Vector(
      Math.sin(r) * Math.random() * 500,
      Math.cos(r) * Math.random() * 500,
    );
  }

  get inViewport() {
    return this.position.y < this.ctx.canvas.height / 2;
  }

  private get rotation() {
    return this.rotationDegree * Math.PI / 180;
  }

  public draw() {
    if (!this.inViewport) {
      return;
    }

    const { translateX, translateY } = this.updatePosition();

    this.ctx.save();

    this.ctx.translate(translateX, translateY);
    this.ctx.rotate(this.rotation);
    this.ctx.translate(-translateX, -translateY);

    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.position.x,
      this.position.y,
      this.sqWidth,
      this.sqHeight,
    );

    this.ctx.restore();
  }

  private updatePosition() {
    const randomIncrement = Math.floor(Math.random() * 5);

    this.velocity.add(this.gravity);
    this.position.add(new Vector(
      this.velocity.x * this.dt,
      this.velocity.y * this.dt
    ));

    this.velocity.multiply(0.99);

    this.rotationDegree += randomIncrement;

    this.sqWidth = this.substract
      ? this.sqWidth - randomIncrement
      : this.sqWidth + randomIncrement;

    if (this.sqWidth <= -20 || this.sqWidth >= 20) {
      this.substract = !this.substract;
    }

    return {
      translateX: this.sqWidth / 2 + this.position.x,
      translateY: this.sqHeight / 2 + this.position.y,
    };
  }
}
