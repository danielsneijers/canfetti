// tslint:disable:no-any
import {
  degreeToRadian,
  randomCircumference,
  randomNumberBetween0andX,
} from '../math';

describe('math', () => {
  describe('degreeToRadian', () => {
    it('converts angles in degrees to radians', () => {
      expect(degreeToRadian(1)).toBe(0.017453292519943295);
      expect(degreeToRadian(180)).toBe(3.141592653589793);
      expect(degreeToRadian(360)).toBe(6.283185307179586);
    });
  });

  describe('randomCircumference', () => {
    let spy;

    beforeAll(() => {
      spy = jest
        .spyOn(Math, 'random')
        .mockImplementation(() => 0.6522531586373328);
    });

    afterAll(() => {
      spy.mockRestore();
    });

    it('returns a random circumference number', () => {
      expect(randomCircumference()).toBe(4.098227462911566);
      expect(global.Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe('randomNumberBetween0andX', () => {
    it('returns 0 or 1 by default', () => {
      const randomNumbers = [
        randomNumberBetween0andX(),
        randomNumberBetween0andX(),
        randomNumberBetween0andX(),
        randomNumberBetween0andX(),
        randomNumberBetween0andX(),
      ];

      randomNumbers.forEach((int) => {
        expect(int).toBeGreaterThanOrEqual(0);
        expect(int).toBeLessThanOrEqual(1);
      });
    });

    it('returns a number between 0 or X by default', () => {
      const randomNumbers = [
        randomNumberBetween0andX(5),
        randomNumberBetween0andX(5),
        randomNumberBetween0andX(5),
        randomNumberBetween0andX(5),
        randomNumberBetween0andX(5),
      ];

      randomNumbers.forEach((int) => {
        expect(int).toBeGreaterThanOrEqual(0);
        expect(int).toBeLessThanOrEqual(5);
      });
    });
  });
});
