const solution = (n) => { 
    let sum = 0;
    const num = String(n);
    for(let value of num){
        sum = sum + Number(value);
    }
    return sum;
}