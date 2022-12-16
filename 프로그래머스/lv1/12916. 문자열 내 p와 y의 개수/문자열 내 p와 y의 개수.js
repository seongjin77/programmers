function solution(s){
    var answer = true;
    let pnum = 0;
    let ynum = 0;
    let low =  s.toLowerCase();
    
    console.log(low)
    
    for(let i=0; i<low.length; i++){
        if(low[i] ==='p'){
            pnum++
        }
        else if(low[i] ==='y'){
            ynum++
        }
    }
    
    if(pnum ===0 && ynum ===0){
        answer = true;
    } else if(pnum === ynum){
        answer = true;
    } else {
        answer = false;
    }
    
   
    
    return answer;
}