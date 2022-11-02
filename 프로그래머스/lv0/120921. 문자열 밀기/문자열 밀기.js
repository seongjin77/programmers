function solution(A, B) {
    var answer = -1;

   let arr = A.split('');
   for(let i=1; i<A.length; i++){
       if(arr.join('') === B) return 0
       arr.unshift(arr[arr.length-1]);
       arr.pop();
     
       if(arr.join('') === B) return i
   }
    
    
    return answer;
}