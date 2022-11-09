function solution(chicken) {
 var answer =0;
 let rest =0;   
    
 while(chicken>1){
     answer += Math.floor(chicken / 10) // 108 10 1
     rest += chicken % 10 // 1 8 
     chicken = chicken / 10
 }   
    
    
  return answer + Math.floor(rest / 10)
}