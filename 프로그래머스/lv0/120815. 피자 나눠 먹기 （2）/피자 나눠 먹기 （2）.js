function solution(n) {
    var answer = 0;
    let max = (n / min(n,6)) * (6 / min(n,6)) * min(n,6)
    
    function min (n1 , n2){
        
        if(n1 % n2 === 0){
            return n2
        }
        else return min(n2, n1 % n2)
    };
    
   
   if(n % 6 === 0) {
       answer = n / 6
   }
    else{
        answer = max / 6
    }
    
  
    
    return answer;
}