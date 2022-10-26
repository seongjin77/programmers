function solution(order) {
    var answer = 0;
    
    order.toString().split('').forEach(v => {
        if(v % 3 === 0 && v !== '0' ) answer++
    } )  

    
    return answer;
}