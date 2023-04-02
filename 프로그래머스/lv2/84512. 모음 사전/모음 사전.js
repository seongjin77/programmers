function solution(word) {
    var answer = 0;
    let test = ['A','E','I','O','U'];
    // 순서는 A E I O U
    // 5!
    // 
    
function permutation(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

  let word5 =  permutation(test, 5).map(v => v.join(''));
  let word4 =  permutation(test, 4).map(v => v.join(''));
  let word3 = permutation(test, 3).map(v => v.join(''));
  let word2 = permutation(test, 2).map(v => v.join(''));
  let word1 = permutation(test, 1).map(v => v.join(''));

    let final = [...word5,...word4,...word3,...word2,...word1].sort()
    
    console.log(final)
    answer = final.indexOf(word) + 1
    
    return answer;
}