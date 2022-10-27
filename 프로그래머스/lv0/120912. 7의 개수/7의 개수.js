function solution(array) {
    var answer = 0;
    
    let combine = array.join('');
    
    answer = combine.match(/7/g)
  
    
  return  answer ?  answer.length : 0
}