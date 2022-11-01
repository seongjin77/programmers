function solution(spell, dic) {
    var answer = 0;
    
    answer = dic.filter(v => {
       return spell.every(t => v.includes(t))
    }).length ? 1 : 2
    
 
    
  
    
    return answer;
}