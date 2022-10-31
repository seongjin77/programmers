function solution(s) {
    var answer ='';
    const obj = {}
    
    for(let i of s){
        obj[i] = (obj[i] || 0) + 1
    }
   
    Object.entries(obj).sort().filter(x => x[1] === 1).map(v => answer += v[0])
    

    
    return answer ;
}