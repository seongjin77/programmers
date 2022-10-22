function solution(array) {
    var answer = [];
    // 1. 최빈값을 리턴
    // 2. 최빈값이 여러개일 경우 -1을 리턴
    
    let arr = new Set(array);
        arr = [...arr]
   // console.log(arr)
    for(let value of arr){     
        let num = 0;
        for(let i=0; i<array.length; i++){
            if(value === array[i]) num += 1
        }
        answer.push(num)
    }
    
 //  console.log(answer)
     let result = Math.max(...answer);
    // 만약 answer 배열에서 result값이 두개 이상이면 -1을 리턴
    // 아니라면 result값을 arr에서 찾아서 그 값을 리턴
   if(answer.filter(e => e === result).length >= 2) return -1
    else return arr[answer.indexOf(result)]
}