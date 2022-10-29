function solution(left, right) {
    var answer = 0;
    
    
    function divisorNum (n){
        let num = 0; 
        for(let i=1; i<= Math.sqrt(n); i++){
            if(n % i === 0 && i === Math.sqrt(n)){
                num += 1
            }
            else if(n % i ===0){
                num += 2
            }
        }
        return num;
    }
    
    for(let i= left; i<= right; i++){
        if(divisorNum(i) % 2 === 0) answer += i
        else if(divisorNum(i) % 2 !== 0) answer -= i
    }
    

    return answer;
}