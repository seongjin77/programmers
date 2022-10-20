function solution(num_list) {
   var answer = [];
    let num1 = 0;
    let num2 = 0;
   
    num_list.forEach(v => {
        if(v % 2 === 0){
            num1 += 1
        }
        else {
             num2 += 1
        }
    })
    
    answer.push(num1,num2);
    
    return answer;
}