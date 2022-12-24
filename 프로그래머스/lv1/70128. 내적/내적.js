function solution(a, b) {
 
    let sum = 0;
    //1. 배열 a,b의 같은 위치의 요소를 곱하여 더해라
    for(let i=0; i<a.length; i++){
        sum += a[i] * b[i]
    }
    
    return sum;
}