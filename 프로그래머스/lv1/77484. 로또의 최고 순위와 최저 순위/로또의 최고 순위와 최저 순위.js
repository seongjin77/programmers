function solution(lottos, win_nums) {
    let result = [];    
    
    // 순서와 상관없이 번호가 일치하면 맞힌걸로 간주
    // 0은 알아볼 수 없는 순서로 간주
    let lank = {
        6 : 1,
        5 : 2,
        4 : 3,
        3 : 4,
        2 : 5,
        1 : 6,
        0 : 6
    }
    
    
    
    let 없는숫자 = lottos.filter((v) => !win_nums.includes(v));
    //console.log(없는숫자)
    let 최저순위 = 6 - 없는숫자.length;
    let 틀린번호 = 없는숫자.filter(v => v !== 0)
    let 최고순위 = 6 - 틀린번호.length;
    
    result.push(lank[최고순위])
    result.push(lank[최저순위])
    
    return result
}