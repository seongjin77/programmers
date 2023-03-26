function solution(brown, yellow) {

    let 넓이 = brown + yellow
    
    for(let height= 3; height<=brown; height++){
        if(넓이 % height === 0){
              let 가로 = 넓이 / height // 3
              if( (가로-2)*(height-2) === yellow){
                  return [가로,height]
              }
              
            
        }
    }
    
   
}