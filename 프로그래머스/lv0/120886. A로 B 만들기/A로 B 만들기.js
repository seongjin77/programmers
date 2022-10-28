function solution(before, after) {
    var answer = 0;
    
   let a = after.split('').sort().join('');
   let b = before.split('').sort().join('');

    if( a === b) answer = 1
    
    
    
    return answer;
}