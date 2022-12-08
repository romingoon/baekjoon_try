const solution = (array, n) => {
  let cnt = 0;
  for (item of array) {
    if (item === n) {
      cnt += 1;
    }
  }
  return cnt;
};