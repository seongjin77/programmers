function solution(n) {
  let answer = 0;
  // 1. n이 들어왔을때 팩토리얼 i의 가장 큰 정수를 반환하여라
    let start = 1;
    let num =1;
    while(1){
      start = start * num
        console.log(start)
        console.log(n)
        if(start === n){
            return answer = num
        }
        else if(start > n){
            return answer = num-1
        }    
        
        num ++
    }
    
}