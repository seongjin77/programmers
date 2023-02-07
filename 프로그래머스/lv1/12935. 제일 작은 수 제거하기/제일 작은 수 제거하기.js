function solution(arr) {
    // 제일 작은 수 찾아 제거
    // 1. min 함수 활용, 2.정렬해서 맨 앞에 수 찾기.
   
    let min = Math.min(...arr);    
    let target = arr.indexOf(min);
    arr.splice(target,1);
    
    if(arr.length === 0){
        return [-1]
    } 
    
    
    
     return arr
}