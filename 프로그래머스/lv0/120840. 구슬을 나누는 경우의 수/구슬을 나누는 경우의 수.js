function solution(balls, share) {
    var answer = 0;
    
    function f (num){
        let result = BigInt(1);
        for(let i=1; i<=num; i++){
             result *= BigInt(i)
        }
        return result;
    }
    
    
    answer = f(balls) / (f(balls-share) * f(share))
    
    return answer;
}