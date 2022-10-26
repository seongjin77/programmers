function solution(my_string) {
  
   
   return my_string.replace(/\D/gm,'').split('').map(v=>{
       return parseInt(v)
    }).sort((a,b) => a-b);
    
    
   
}