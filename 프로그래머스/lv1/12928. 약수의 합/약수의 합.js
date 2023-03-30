function solution(n) {
    let r = n;
    let sum = 0;
    while(r>0){
        if(n % r ===0) sum+= r;
        r--;
    }
    return sum;
}