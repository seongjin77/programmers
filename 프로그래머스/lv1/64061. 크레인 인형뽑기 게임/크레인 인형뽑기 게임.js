function solution(board, moves) {
    var answer = 0;
    let len = board.length; // 5
    let target = [];
    let pve;
    // moves 값을 돌면서 board 배열의 값을 추출
    // moves 값은 board[n][값-1]
    // if 만약 moves의 값을 넣어줬을때 전 moves의 값과 같을 경우 result + 2 증가
    for(let i=0; i<moves.length; i++){
      let movenum = moves[i]
        for(let j=0; j<len; j++){
            if(board[j][movenum-1]!==0){
                     target.push(board[j][movenum-1])
                     board[j][movenum-1] = 0
                    break; // for문 빠져나오기 안 빠져나오면 맨 위 다음 인형도 찾아버림
            } 
            
        }
        // console.log(target)
        for(let t=0; t<target.length; t++){
            if(target[t]===target[t+1]){
                target.splice(t,2)
                answer += 2
            }
        }
    }
    
    
    return answer;
}