const solution = (num_list) => {
  const res = [];
  const even = num_list.filter((item) => item % 2 === 0).length;
  const odd = num_list.filter((item) => item % 2 !== 0).length;

  res.push(even);
  res.push(odd);
  return res;
};