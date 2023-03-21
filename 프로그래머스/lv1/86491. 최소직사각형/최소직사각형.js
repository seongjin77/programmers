function solution(sizes) {

    
    let 가로 = Math.max(...sizes.map(v => Math.max(...v)))
    
    let 세로 = Math.max(...sizes.map(v => Math.min(...v)))
    
    return 가로 * 세로
    
    
}