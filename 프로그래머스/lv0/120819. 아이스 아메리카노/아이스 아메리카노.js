const solution = (money) =>{
    const res = [];
    res.push(parseInt(money / 5500));
    res.push(parseInt(money % 5500));
    return res;
}