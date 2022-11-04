function solution(dots) {
    var answer = [];
    let deleteArr = dots.shift();
    // 배열의 첫번째 모든 요소가 2~4번째의 요소에 하나라도 포함되어 있는지?  
   let test = dots.map(arr => {
       if( deleteArr.some(v => arr.includes(v)) ) answer.push(arr);
    })
    
   
   let num1 = (deleteArr[0] - answer[0][0]) + (deleteArr[1] - answer[0][1])
   let num2 = (deleteArr[0] - answer[1][0]) + (deleteArr[1] - answer[1][1])
        
    return Math.abs(num1) * Math.abs(num2)
}