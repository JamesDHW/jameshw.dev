export const selectRandom = <T>(arr: T[]): T => {
  const randIndex = Math.floor(Math.random() * arr.length);

  return arr[randIndex]!;
};
