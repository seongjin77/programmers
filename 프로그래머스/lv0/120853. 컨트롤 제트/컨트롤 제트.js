function solution(s) {
   let answer = [];
    
    s.split(' ').map(v => {
        if(v === 'Z') answer.pop();
        else answer.push(parseInt(v))
    })
    
    return answer.reduce((a,b) => a + b,0)
    
    
}