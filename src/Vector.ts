export default class Vector {
  public x: number;
  public y: number;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  public add({ x, y }: Vector): Vector {
    this.x += x;
    this.y += y;
    return this;
  }

  public multiply(multiplier: number): Vector {
    this.x *= multiplier;
    this.y *= multiplier;
    return this;
  }
}
