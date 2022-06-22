export const incrementValueByIndex = (
  array: number[],
  index: number,
): number[] => [
  ...array.slice(0, index),
  (array[index] + 1) % 10,
  ...array.slice(index + 1),
];
