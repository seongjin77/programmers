function solution(my_string, letter) {
    var answer = '';
    let target = new RegExp(letter , 'g')
    answer = my_string.replace(target,'')
    
    return answer;
}