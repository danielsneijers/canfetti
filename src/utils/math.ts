export function degreeToRadian(angle: number) {
  return angle * Math.PI / 180;
}

export function randomCircumference() {
  return Math.random() * Math.PI * 2;
}

export function randomNumberBetween0andX(x: number = 1) {
  return Math.round(Math.random() * x);
}
