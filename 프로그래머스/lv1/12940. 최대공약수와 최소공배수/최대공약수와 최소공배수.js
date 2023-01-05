function solution(n, m) {
    
    
    let maxNum = function(n,m){
        if(n%m === 0){
            return m
        }
        else {
           return maxNum(m, n%m)
        }
    }
    
   
    let minNum = n * m / maxNum(n,m)
    
    
    
    
    return [maxNum(n,m), minNum ]
}