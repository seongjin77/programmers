function solution(my_string) {
    var answer = 0;
    
    let test = my_string.split(/\D+/)
    
    let test2 = test.filter(v => !isNaN(parseInt(v)))
    
    let test3 = test2.forEach(v => answer += parseInt(v))
   
    
    
    return answer;
}