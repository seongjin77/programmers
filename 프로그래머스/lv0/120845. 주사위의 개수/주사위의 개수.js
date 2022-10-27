function solution(box, n) {
    var answer = 1;
    
    box.forEach(v => {
         answer *= Math.floor(v/n) 
    })
    
    return answer;
}