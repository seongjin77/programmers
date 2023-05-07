function solution(orders, course) {
    // 코스 요리 메뉴는 2가지 이상
    // 최소 2명 이상 주문한 단품 메뉴로 구성
    var answer = [];

    const getCombinations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); 
      const combinations = getCombinations(rest, selectNumber - 1); 
      const attached = combinations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });
    return results; // 결과 담긴 results return
}
    let store = new Map();
    
    orders.map(person => {
        course.map(num => {
            let orderArr = person.split('')
            let result = getCombinations(orderArr,num)
            // 만약 이전에 값이 있다면 거기다가 추가.
           result = store.get(num) ? [...store.get(num),...result] : result
            store.set(num, result)
        })
    })
    
    //console.log(store)
    
    store.forEach((courseNum) =>{
        let store2 = {}
       courseNum.forEach(menu => {
          let order = menu.sort().join('')
          store2[order] = ( store2[order] || 0 ) + 1
       })
        // 가장 큰 수 , 2 이상인 것만 push
        let 코스요리정렬 = Object.entries(store2).sort(([,a],[,b]) => a > b? -1: 1 )
        // console.log('d',test)

       if(코스요리정렬.length) {
           let max = 코스요리정렬[0][1]
           let 선택된코스메뉴 = 코스요리정렬.filter(v => v[1] === max && max > 1)
           console.log(선택된코스메뉴)
           선택된코스메뉴.forEach(menu => answer.push(menu[0]))
       }
        
    })
    
     answer.sort()
    
    return answer;
}