function solution(polynomial) {
  
    let Xnum =0;
    let num = 0;
    let arr = polynomial.split(' + ')
    let Xarr = arr.filter(v => v.includes('x'));
    let Narr = arr.filter(v => !v.includes('x'))
    Xarr.forEach(v => {
        if(parseInt(v)) Xnum += parseInt(v)
        else Xnum += 1
    })
    
    Narr.forEach(v => {
        if(v) num += parseInt(v)
    })
    
    
    if(Xnum === 0){
        return ''+num
    }
    else if(Xnum === 1) {
        return num !== 0 ? `x + ${num}` : 'x'
    }
    else if(Xnum !== 1) {
        return num !== 0 ? `${Xnum}x + ${num}` : Xnum + 'x'
    }
    
}