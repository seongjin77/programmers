function solution(sides) {
    var answer = 0;
  
   let min = Math.min(...sides);
    let max = Math.max(...sides);
    

    
    
    for(let i=1; i<max; i++){
        if(i + min > max) answer += 1
    }
    
    for(let i= max; i<min + max; i++){
       if(i+min >max) answer += 1;
    }
    
    
    
    
    return answer;
}