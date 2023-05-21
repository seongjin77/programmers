function solution(s) {
    var answer = [];
    
    const test = s.slice(1,-1).split('},{')
    if(test.length == 1){
        const exclude = test[0].replace('{','').replace('}','')
        test.splice(0,1,exclude)
    }
    else{
         const exclude1 = test[0].replace('{','')
         const exclude2 = test[test.length-1].replace('}','')
         test.splice(0,1,exclude1)
         test.splice(test.length-1,1,exclude2)
    }
    
    test.sort((prev, cur) => {
        if (prev.length > cur.length) return 1;
        if (prev.length < cur.length) return -1;
    })
    
    console.log('배열?',test)
    answer.push(Number(test[0]))
    for(let i = 1; i<test.length; i++){
        const arr = test[i].split(',')
        const ff = arr.filter(v => !answer.includes(Number(v)))
        answer.push(Number(ff))
        console.log('ff',ff)
    }
    
    
    return answer;
}