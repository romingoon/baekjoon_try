const solution = (n) =>{
    const res = [];
    for(let i=1;i<=n; i+=1){
        if(i%2===1) res.push(i);
    }
    return res;
}