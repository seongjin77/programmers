function solution(i,j,k){
    let result = 0;
    let count
    for(i; i<=j; i++){
        
        let str = i + ''
        let arr = str.split('').filter(v => v.includes(k))
        result += arr.length
    }

   
    
    return result
    
}
    
    
    
