function solution(my_string) {
    var answer = '';
    
answer =   my_string.split('').map(v => {
     
        if(v === v.toUpperCase()) return v.toLowerCase()
        else return v
        
    }).sort().join('')
    

    
    return answer
}