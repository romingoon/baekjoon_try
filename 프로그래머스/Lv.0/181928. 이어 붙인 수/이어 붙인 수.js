const solution = num_list => {
  let odd = '';
  let even = '';
  let sum = 0 
  for(const num of num_list){
    num % 2 === 1 ? odd += num : even += num;
    sum = Number(odd) + Number(even);
  }
  return sum;
}
