export const colors = [
  '#fce18a',
  '#ff726d',
  '#b48def',
  '#f4306d',
  '#3aaab8',
  '#38ba9e',
  '#bb3d72',
  '#006ded',
];

export function randomColor(): string {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
