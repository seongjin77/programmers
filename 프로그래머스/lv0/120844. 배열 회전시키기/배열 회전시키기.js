function solution(numbers, direction) {
    var answer = [...numbers];
    let len = answer.length;
    
    numbers.forEach((v,i) => {
        if(direction === 'right'){
            if(i === len-1) answer[0] = v;
            else answer[i+1] = v;
        }
        else{
            if(i === 0) answer[len-1] = v;
            else answer[i-1] = v;
        }
    })
    
    
    
    return answer;
}