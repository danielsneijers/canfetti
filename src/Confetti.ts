import Vector from "./Vector";

const colors = [
  "#fce18a",
  "#ff726d",
  "#b48def",
  "#f4306d",
  "#3aaab8",
  "#38ba9e",
  "#bb3d72",
  "#006ded"
];

export default class ConfettiParticle {
  private ctx: CanvasRenderingContext2D;
  private sqWidth: number = 20;
  private sqHeight: number = 20;
  private rotationDegree: number = 0;
  private substract: boolean = true;
  private dt: number = 0.016;
  private accelaration: number = 0;
  private color: string;

  private position: Vector = new Vector(0, 10);
  private velocity: Vector = new Vector(0, 1);
  private gravity: Vector = new Vector(0, 9.8);
  private force: Vector = new Vector(0, 0);

  constructor(ctx: CanvasRenderingContext2D, x: number = 0) {
    const r = Math.random() * Math.PI * 2;
    const index = Math.floor(Math.random() * 8);
    this.ctx = ctx;
    this.position.x = x;
    this.color = colors[index];
    this.velocity = new Vector(
      Math.sin(r) * Math.random() * 500,
      Math.cos(r) * Math.random() * 500
    );
  }

  private get rotation(): number {
    return this.rotationDegree * Math.PI / 180;
  }

  public draw(): void {
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
      this.sqHeight
    );

    this.ctx.restore();
  }

  private updatePosition(): { translateX: number; translateY: number } {
    const forceX = this.force.x + this.gravity.x;
    const forceY = this.force.y + this.gravity.y;

    this.force.x = 0;
    this.force.y = 0;

    this.velocity.x += forceX;
    this.velocity.y += forceY;
    this.position.x += this.velocity.x * this.dt;
    this.position.y += this.velocity.y * this.dt;
    this.velocity.multiply(0.99);

    this.rotationDegree = this.rotationDegree += Math.random() * 3;

    const increment = Math.random() * 2;

    this.sqWidth = this.substract
      ? this.sqWidth - increment * 2
      : this.sqWidth + increment * 2;

    if (this.sqWidth <= -20 || this.sqWidth >= 20) {
      this.substract = !this.substract;
    }

    return {
      translateX: this.sqWidth / 2 + this.position.x,
      translateY: this.sqHeight / 2 + this.position.y
    };
  }
}
