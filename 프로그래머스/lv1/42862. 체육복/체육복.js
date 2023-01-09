function solution(n, lost, reserve) {
    let answer = 0;
    let count = {};
    let realLost = lost.filter(v => !reserve.includes(v)).sort()
    
    // 모든 학생들에게 체육복 제공
    for(let i=1; i<=n; i++){
        count[i] = 1
    }
    // 여벌 체육복 학생
    reserve.forEach(i => {
        count[i] += 1
    })
    // 잃어버린 체육복 학생
    lost.forEach(i => {
        count[i] += -1
    })
    
    // 빌려주기
    realLost.forEach(v => {
        if(count[v-1] >= 2){
            count[v-1] += -1
            count[v] += 1
        }
        else if(count[v+1] >=2){
            count[v+1] += -1
            count[v] += 1
        }
    })
    
    //수 구하기
    for(let student in count){
        if(count[student] >= 1){
            answer += 1
        }
    }
    

    
    return answer;
}