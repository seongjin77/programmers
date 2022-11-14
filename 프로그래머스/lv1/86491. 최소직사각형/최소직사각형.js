function solution(sizes) {

  let Xmax = Math.max(...sizes.map(x => Math.max(...x)));
  let Ymax = Math.max(...sizes.map(y => Math.min(...y)));
   
  //1. 가로, 세로 제일 큰 값을 걸러낸다.
  
  //2. 회전 후 저장된 값과 비교
   
  return Xmax * Ymax
}