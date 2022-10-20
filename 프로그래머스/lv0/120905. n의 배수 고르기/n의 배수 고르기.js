function solution(n, numlist) {
    var answer = [];
    
    answer =  numlist.filter(v => v%n === 0 )
    
    
    
    return answer;
}