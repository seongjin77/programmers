function solution(array, n) {
    // 1. 각 요소를 순회하면서 뺀 차의 절대값을을 빈 배열에 푸쉬
    
    array.sort((a,b) => a-b)
    
   let arr = array.map(v => Math.abs(v - n))
   let min = Math.min(...arr);
   let result =array[arr.indexOf(min)]
    
   
   
    return result
}