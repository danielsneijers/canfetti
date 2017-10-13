import 'jest';
import Vector from '../Vector';

describe(Vector.name, () => {
  describe('constructor', () => {
    it('creates a Vector with x and y coordinates', () => {
      expect(new Vector(1, 1)).toEqual({ x: 1, y: 1 });
      expect(new Vector(3.6, 4)).toEqual({ x: 3.6, y: 4 });
    });

    it('is chainable', () => {
      expect(new Vector(1, 1).add(new Vector(1, 1))).toEqual({ x: 2, y: 2 });
    });
  });

  describe('add', () => {
    let testVector: Vector;
    let addVector: Vector;

    beforeEach(() => {
      testVector = new Vector(0, 0);
      addVector = new Vector(2, 3);
    });

    it('adds x/y values of Vector to current Vector', () => {
      expect(testVector.add(addVector)).toEqual({ x: 2, y: 3 });
      expect(testVector.add(addVector)).toEqual({ x: 4, y: 6 });
    });

    it('is chainable', () => {
      expect(testVector.add(addVector).multiply(4)).toEqual({
        x: 8,
        y: 12,
      });
    });
  });

  describe('multiply', () => {
    let testVector: Vector;

    beforeEach(() => {
      testVector = new Vector(2, 3);
    });

    it('multiplies x/y values of current Vector by scalar', () => {
      expect(testVector.multiply(2)).toEqual({ x: 4, y: 6 });
      expect(testVector.multiply(4)).toEqual({ x: 16, y: 24 });
    });

    it('is chainable', () => {
      expect(testVector.multiply(4).add(new Vector(2, 2))).toEqual({
        x: 10,
        y: 14,
      });
    });
  });

  describe('asArray', () => {
    it('returns x/y values as an Array', () => {
      expect(new Vector(4, 7).asArray()).toEqual([4, 7]);
    });
  });
});
