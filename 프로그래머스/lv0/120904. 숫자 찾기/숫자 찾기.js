function solution(num, k) {
    var answer = 0;
    let check = num.toString()
    
    if(check.includes(k+'')) {
        answer = check.indexOf(k+'') + 1
    }
    else {
        answer = -1
    }
    
    
    
    return answer;
}