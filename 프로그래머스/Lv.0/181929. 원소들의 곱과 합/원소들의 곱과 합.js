const solution = num_list => {
  return num_list.reduce((mul,cv)=> mul * cv ) < num_list.reduce((sub, cv) => (sub += cv)) ** 2 ? 1 : 0;
}
