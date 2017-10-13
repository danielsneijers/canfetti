import { randomColor } from './utils/colors';
import Vector from './models/Vector';

export default class ConfettiParticle {
  private sqWidth: number = 20;
  private sqHeight: number = 20;
  private rotationDegree: number = 0;
  private substract: boolean = true;
  private dt: number = 0.016;
  private color: string;

  private position: Vector;
  private velocity: Vector = new Vector(0, 1);
  private gravity: Vector = new Vector(0, 9.8);
  private force: Vector = new Vector(0, 0);

  constructor(
    public ctx: CanvasRenderingContext2D,
    x: number = 10,
    y: number = 10,
    velocity?: Vector,
  ) {
    const r = Math.random() * Math.PI * 2;
    this.position = new Vector(x, y);
    this.color = randomColor();

    if (velocity) {
      this.velocity = velocity;
    } else {
      this.velocity = new Vector(
        Math.sin(r) * Math.random() * 500,
        Math.cos(r) * Math.random() * 500,
      );
    }
  }

  get inViewport() {
    return this.position.y < this.ctx.canvas.height / 2;
  }

  private get rotation(): number {
    return this.rotationDegree * Math.PI / 180;
  }

  public draw(): void {
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

  private updatePosition(): { translateX: number; translateY: number } {
    const forceX = this.force.x + this.gravity.x;
    const forceY = this.force.y + this.gravity.y;
    const increment = Math.floor(Math.random() * 5);

    this.force.x = 0;
    this.force.y = 0;

    this.velocity.x += forceX;
    this.velocity.y += forceY;
    this.position.x += this.velocity.x * this.dt;
    this.position.y += this.velocity.y * this.dt;
    this.velocity.multiply(0.99);

    this.rotationDegree = this.rotationDegree += increment;

    this.sqWidth = this.substract
      ? this.sqWidth - increment
      : this.sqWidth + increment;

    if (this.sqWidth <= -20 || this.sqWidth >= 20) {
      this.substract = !this.substract;
    }

    return {
      translateX: this.sqWidth / 2 + this.position.x,
      translateY: this.sqHeight / 2 + this.position.y,
    };
  }
}
