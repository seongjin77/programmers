function solution(arr) {
    let answer= [];
    
    console.log(Math.min(...arr))
    
    if(arr.length === 1){
         answer.push(-1)
    }
    else {
        arr.splice(arr.indexOf(Math.min(...arr)),1)
        return arr
    }
    
     return answer
}