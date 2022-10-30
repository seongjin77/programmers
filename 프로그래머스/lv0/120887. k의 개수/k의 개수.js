function solution(i, j, k) {
    var answer = 0;
    
    for(let t= i; t<= j; t++){
       const m = new RegExp(`${k}`,'g')
       let test = t.toString().match(m);
       
        if(test){
            answer += test.length;
        }
        
       
        
    }

    
    
    
    return answer;
}