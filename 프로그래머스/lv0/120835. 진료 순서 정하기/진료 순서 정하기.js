function solution(emergency) {
    var answer = [];
    let obj = {};
    
    [...emergency].sort((a,b) => b-a).map((v,i) => obj[v] = i+1);
    
    emergency.forEach(v => answer.push(obj[v]))
    
    
  
    
    return answer;
}