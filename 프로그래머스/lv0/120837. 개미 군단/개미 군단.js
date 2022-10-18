function solution(hp) {
    var answer = 0;
    
    let arr = [5,3,1];
    
    for(let i=0; i<arr.length; i++){
        if(hp % arr[i] ===0){
            return answer += hp / arr[i]
        }
        else{
            answer += Math.floor(hp/arr[i])
            hp = hp % arr[i]
        }
        
    }
    
    
    return answer;
}