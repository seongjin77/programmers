function solution(n) {
  
  let num = 1;
  let f = 1;  
  while(1){
      f *= num
      if(f > n) return num-1
      else if( f === n) return num
      num++
  }
    
}