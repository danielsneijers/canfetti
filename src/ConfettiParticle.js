import { randomColor } from './utils/colors';
import {
  degreeToRadian,
  randomCircumference,
  randomNumberBetween0andX,
} from './utils/math';
import Vector from './models/Vector';

export default class ConfettiParticle {
  constructor(ctx, x = 0, y = 0) {
    this.sqWidth = 20;
    this.sqHeight = 20;
    this.rotationDegree = 0;
    this.substractWidth = true;
    this.deltaTime = 0.016;
    this.color = randomColor();
    this.gravity = new Vector(0, 9.8);

    this.ctx = ctx;
    this.position = new Vector(x, y);
    this.velocity = new Vector(
      Math.sin(randomCircumference()) * Math.random() * 500,
      Math.cos(randomCircumference()) * Math.random() * 500,
    );
  }

  get inViewport() {
    return this.position.y < this.ctx.canvas.scrollHeight;
  }

  draw() {
    if (this.inViewport) {
      const { translateX, translateY } = this.updateParticle();

      this.ctx.save();

      this.ctx.translate(translateX, translateY);
      this.ctx.rotate(degreeToRadian(this.rotationDegree));
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
  }

  updateParticle() {
    this.updateRotation(randomNumberBetween0andX(15));
    this.updateSubtractWidth();
    this.updateSqWidth();

    return this.updatePosition();
  }

  updatePosition() {
    const nextPosition = new Vector(
      this.velocity.x * this.deltaTime,
      this.velocity.y * this.deltaTime,
    );

    this.velocity.add(this.gravity).multiply(0.99);
    this.position.add(nextPosition);

    return {
      translateX: this.sqWidth / 2 + this.position.x,
      translateY: this.sqHeight / 2 + this.position.y,
    };
  }

  updateRotation(increment) {
    this.rotationDegree += increment;
  }

  updateSubtractWidth() {
    if (this.sqWidth <= -20) {
      this.substractWidth = false;
    }

    if (this.sqWidth >= 20) {
      this.substractWidth = true;
    }
  }

  updateSqWidth() {
    this.sqWidth = this.substractWidth
      ? this.sqWidth - randomNumberBetween0andX(5)
      : this.sqWidth + randomNumberBetween0andX(5);
  }
}
