function solution(food) {

    // 배열 0번째 물, 1번째 원소부터 9번째 원소까지 있다.
    // 각 원소는 1부터 1000까지
    let result = [0];
    
    for(let i =food.length-1; i>0 ; i--){
        let 음식개수 = 0;
        
        if(food[i] % 2 !== 0){
            음식개수 = (food[i]-1) / 2
        }
        else if(food[i] % 2 === 0) 음식개수 = food[i] / 2
        
        for(let j = 0; j<음식개수; j++){
            result.unshift(i)
            result.push(i)
        }
        
    }
    
   
    
    
    return  result.join('')
}