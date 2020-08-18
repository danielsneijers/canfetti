export function degreeToRadian(angle) {
  return (angle * Math.PI) / 180;
}

export function randomCircumference() {
  return Math.random() * Math.PI * 2;
}

export function randomNumberBetween0andX(x = 1) {
  return Math.round(Math.random() * x);
}
