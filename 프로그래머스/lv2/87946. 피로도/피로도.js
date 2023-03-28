function solution(k, dungeons) {
    // 최대한 많은 수의 던전을 돌아야함
    var answer = []
    
    const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
   
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 

      const permutations = getPermutations(rest, selectNumber - 1); 

      const attached = permutations.map((el) => [fixed, ...el]); 

      results.push(...attached); 

    });

    return results; 
}
    // 순열
  const test =  getPermutations(dungeons, dungeons.length)
  console.log(test)
    
    test.forEach(v => {
        let num = 0;
        let kk = k;
        v.forEach(vv => {
            if(kk >= vv[0]){
                num += 1;
                kk -= vv[1]
            }
        })
        answer.push(num)
    })
    
    
    
    return Math.max(...answer);
}