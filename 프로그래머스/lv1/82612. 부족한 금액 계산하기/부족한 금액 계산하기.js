function solution(price, money, count) {
    var answer = -1;
    let sum= 0;
    
    for(let i=1; i<=count; i++){
        sum += i * price;
        
        if(money<sum){
            answer = Math.abs(money-sum);
        }
        else{
            answer = 0
        }
    }
    
    return answer;
}