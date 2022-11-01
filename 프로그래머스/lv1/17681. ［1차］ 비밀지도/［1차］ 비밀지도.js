function solution(n, arr1, arr2) {
    var answer = [];
    let arr = [];
    arr1.forEach((v,i) =>  arr.push([v,arr2[i]]));
    
    arr.map(v => {
        answer.push((v[0] | v[1]).toString(2).padStart(n,'0').replace(/1/g,'#').replace(/0/g,' '))
    })
    
    
    

    
    
    
    return answer;
}