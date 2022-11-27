function solution(nums) {
   
    // 1. 서로 다른 3개를 뽑아 소수를 만든다.
    // 2. 소수가 되는 경우의 개수를 리턴
    let result=0;
    
    //조합 알고리즘
    const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, selectNumber - 1); 
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((el) => [fixed, ...el]); 
      //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });

    return results; // 결과 담긴 results return
}
    //조합의 수
     console.log(getCombinations(nums,3))   
    
    getCombinations(nums,3).map(v => {
        if( 소수판별(v.reduce((a,b) => a+b,0)) ) result++
    })
    
    function 소수판별(num){
        for(i=2; i<= Math.sqrt(num); i++){
            if( (num % i) === 0 ) return false
            
        }
        return true;
    }


    
    return result
};