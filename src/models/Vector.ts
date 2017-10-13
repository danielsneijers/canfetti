export default class Vector {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    return this;
  }

  public add({ x, y }: Vector): Vector {
    this.x += x;
    this.y += y;
    return this;
  }

  public multiply(scalar: number): Vector {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  public asArray(): [number, number] {
    return [this.x, this.y];
  }
}
