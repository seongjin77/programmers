function solution(n) {
    var answer = 0;
    
    for(let i=1; i<= n; i++){
        if(count(i) >= 3) answer += 1 
    }
    
    
    // 약수의 개수 구해주는 함수
    function count (n){
        let num = 0;
        for(let i=1; i<= Math.sqrt(n); i++){
            if(n % i === 0 && i === Math.sqrt(n)) num += 1
            else if(n % i === 0) num += 2
        }
        
        return num;
    }
    
    
    return answer;
}