function solution(numlist, n) {
    var answer = [];
    // 1. 배열을 순회하면서 정수 n과의 차의 절대값을 구한다.
    // 2. 차이가 작은 요소부터 정렬을 해준다.
    // 3. 차이가 같을 경우 요소가 큰 수부터 푸쉬를 해준다.
    let obj = {};
    numlist.map(v => obj[v] = Math.abs(v-n) )
    let arr = Object.entries(obj)
    
    arr.sort((a,b) => parseInt(b[0]) - parseInt(a[0]))   
    arr.sort((a,b) => a[1] - b[1])
    
    arr.map(v => answer.push(parseInt(v[0])))
    
    
    return answer;
}