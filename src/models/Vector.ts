export default class Vector {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  public add({ x, y }: Vector) {
    this.x += x;
    this.y += y;
    return this;
  }

  public multiply(scalar: number) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  public asArray() {
    return [this.x, this.y];
  }
}
