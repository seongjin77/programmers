function solution(num, total) {
    var answer = [];
    
    if(num % 2 !== 0){
        let middle = total / num;
        let 내림 = middle;
        let 올림 = middle;
        for(let i=1; i <= (num-1)/2; i++){
            내림 -= 1
            올림 += 1
            answer.push(내림);
            answer.push(올림);
        }
        answer.push(middle)
    }
    else{
        let middle = total / num;
        let 내림 = Math.floor(middle);
        let 올림 = Math.ceil(middle);
        for(let i =1; i<= num/2; i++){
            answer.push(내림);
            answer.push(올림);
            내림 -= 1
            올림 += 1
        }
    }
    answer.sort((a,b) => a-b)
    
    return answer;
}