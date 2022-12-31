function solution(n) {
    var answer = 0;
    // 1. 숫자를 다 쪼개서 배열로 저장. 내림차순으로 정렬
    // 2. 담긴 문자열을 하나로 합치고 숫자형으로 변환
    let decline = n.toString().split('');
    
    decline.sort((a,b)=> b-a);
    
    decline.forEach(x => {
        answer += x
        
        return answer
    })
    
  return parseInt(answer)  
  
}