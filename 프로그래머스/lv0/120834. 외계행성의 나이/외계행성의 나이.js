function solution(age) {
    var answer = '';
    let str = 'abcdefghij'
    
    age.toString().split('').map(v => answer += str[parseInt(v)])
    
    
    
    return answer;
}