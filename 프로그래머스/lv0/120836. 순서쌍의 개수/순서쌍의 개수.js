function solution(n) {
    var answer = 0;
    
    for(let i=1; i<= Math.sqrt(n); i++){
        if(n % i === 0 && i !== Math.sqrt(n)) answer += 2
        else if(n % i === 0) answer += 1
    }
    
    return answer;
}