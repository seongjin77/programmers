function solution(s) {
    var answer ='';
    let num = s.length
    
    if(s.length % 2 !== 0){
           
          return s[Math.floor(num/2)]
    }
    else{
        
        answer = s.slice( (Math.floor(num/2)-1) , (Math.floor(num/2)+1))
        
    }
    return answer;
}