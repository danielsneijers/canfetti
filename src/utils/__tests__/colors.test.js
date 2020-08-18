import { colors, randomColor } from '../colors';

describe('Color utils', () => {
  describe('random Color', () => {
    const randomColors = [
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
      randomColor(),
    ];

    it('returns a random Color', () => {
      randomColors.forEach((color) => {
        expect(colors.includes(color)).toBeTruthy();
      });

      const allTheSameColor = randomColors.every(
        (color) => color === randomColors[0],
      );

      expect(allTheSameColor).toBeFalsy();
    });
  });
});
