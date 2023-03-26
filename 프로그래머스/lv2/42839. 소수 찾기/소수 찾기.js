function solution(numbers) {
    
    let checkArr = numbers.split('').map(e => parseInt(e))
    // 문자열을 쪼개서 숫자열 배열로 만듬
    let maxNum =  parseInt(checkArr.sort((a,b) => b-a).join(''))
    // 배열로 만들 수 있는 가장 큰 수
    let 임시배열 = [];
    let test;
    // 배열로 조합 할 수 있는 수들
    
    //순열 함수
    const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 

      const permutations = getPermutations(rest, selectNumber - 1); 

      const attached = permutations.map((el) => [fixed, ...el]); 

      results.push(...attached); 

    });

    return results; // 결과 담긴 results return
}   
    // 만들 수 있는 수의 경우
    for(let i=1; i<=checkArr.length; i++){
       임시배열.push( ...getPermutations(checkArr,i) )
    }
    
    test = 임시배열.map(v => v.join('')).map(v => parseInt(v))
    console.log(test)
    
    let 소수찾기 = (n) => {
    let arr = Array(n+1).fill(true).fill(false, 0, 2);
        
    for(let i=2; i*i<=n; i++){
        if(arr[i]){
            for(let j=i*i; j<=n; j+=i){
                arr[j] = false;
            }
        }
    }
    
    return arr.filter((e,i) => {
        // 인덱스가 숫자니깐 넘버스 배열에 포함되어 있냐?
        if(e) return test.includes( i )
    
    })
}
    
    return 소수찾기(maxNum).length;
}