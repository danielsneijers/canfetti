export default class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  add({ x, y }) {
    this.x += x;
    this.y += y;
    return this;
  }

  multiply(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  asArray() {
    return [this.x, this.y];
  }
}
