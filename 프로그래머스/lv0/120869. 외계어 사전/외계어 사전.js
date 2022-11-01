function solution(spell, dic) {
    var answer = 2;
    
    for(let i=0; i<dic.length; i++){
        let count =0;
        for(let j=0; j<spell.length; j++){
           if(dic[i].includes(spell[j])){
                count += 1
           }
            
            if(count === spell.length) answer = 1
        }
    }
    
    return answer;
}