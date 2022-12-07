const solution = (numbers) => {
  let sum = 0;
  for (item of numbers) {
    sum += item;
  }
  return sum / numbers.length;
};