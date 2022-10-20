function solution(my_string) {
    var answer = '';
    
    answer = my_string.replace(/[aeiou]/gm,'')
    
    return answer;
}