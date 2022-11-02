function solution(keyinput, board) {
    var answer = [0,0];
    
    //board의 크기를 벗어난 방향키 입력은 무시합니다.
    for(let i=0; i<keyinput.length; i++){
        if(keyinput[i] === 'up'){
            if(Math.abs(answer[1]+1) > Math.floor(board[1]/2)) continue;
            answer[1] = answer[1] + 1
        }
        else if(keyinput[i] === 'down'){
            if(Math.abs(answer[1]-1) > Math.floor(board[1]/2)) continue;
            answer[1] = answer[1] - 1
        }
        else if(keyinput[i] === 'left'){
            if(Math.abs(answer[0]-1) > Math.floor(board[0]/2)) continue;
            answer[0] = answer[0] - 1
        }
        else if(keyinput[i] === 'right'){
             if(Math.abs(answer[0]+1) > Math.floor(board[0]/2)) continue;
            answer[0] = answer[0] + 1
        }
    }
    
    
    return answer;
}