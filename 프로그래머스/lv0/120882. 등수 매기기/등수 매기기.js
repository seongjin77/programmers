function solution(score) {
    // 등수를 담을 object 생성
    const dict = {}
    // 현재의 점수를 평균 별 오름차순으로 정렬 한 후 자료 사전에 입력
    const rank = score
        .map(([a,b]) => (a+b)/2)
        .sort((a,b) => b-a)
        .forEach((a,i) => dict[a] === undefined ? dict[a] = i+1 : null)
    console.log(dict)
    
    
    return score.map(([a,b]) => dict[(a+b)/2])
}