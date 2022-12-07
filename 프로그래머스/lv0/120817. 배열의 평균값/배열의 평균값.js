const solution = (numbers) => {
  return numbers.reduce((acc, currVal) => acc + currVal) / numbers.length;
};