function solution(n) {
    var answer = [];
    let divide= 2;
    while(n !== 1){
        if(n % divide === 0 ){
            n = n / divide
            answer.push(divide)
            
        }
        else divide++
    }
    
    
    
    return [...new Set(answer)]
}