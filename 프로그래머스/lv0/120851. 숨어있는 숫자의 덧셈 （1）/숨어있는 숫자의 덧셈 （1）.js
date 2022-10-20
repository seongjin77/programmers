function solution(my_string) {
    var answer = 0;
    
    let num = my_string.replace(/[a-zA-Z]/g,'')
    
    answer = num.split('').reduce((a,b) => parseInt(a) + parseInt(b), 0)
    
    return answer;
}