function solution(common) {
    var answer = 0;
    //1. 등차수열인지 등비수열인지 확인
    //2. 다음 수 리턴
    let len = common.length;
    let boolean= (common[1] - common[0]) === (common[2] - common[1])
    
    if(boolean){ // 등차
        answer = common[len-1] + (common[1]-common[0])
    }
    else{ // 등비
        answer = common[len-1] * (common[1] / common[0])
    }
    
    return answer;
}