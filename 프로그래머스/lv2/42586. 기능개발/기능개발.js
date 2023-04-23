function solution(progresses, speeds) {

    var answer = [];
    
    while(progresses.length > 0){
        let count = 0;
        for(let i=0; i<progresses.length; i++){
            progresses[i] += speeds[i]
        }
       // 더하고 난 뒤 맨 앞의 스케줄이 100보다 같거나 크다면
        while(progresses[0] >= 100){
            count += 1
            progresses.shift();
            speeds.shift();
        }
        // 
        if(count > 0) answer.push(count)
        
    }
    
    return answer;
}