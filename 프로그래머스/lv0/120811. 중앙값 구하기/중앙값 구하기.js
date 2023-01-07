function solution(array) {
    array.sort((a,b)=>a-b);
    const val = parseInt(array.length/2);
    return array[val];
}