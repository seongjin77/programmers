function solution(s) {
    var answer = 0;
    // const num = {
    //     0 : 'zore',
    //     1 : 'one',
    //     2 : 'two',
    //     3 : 'three',
    //     4 : 'four',
    //     5 : 'five',
    //     6 : 'six',
    //     7 : 'seven',
    //     8 :	'eight',
    //     9 : 'nine'
    // };
    
    s = s.replace(/zero/gi, 0);
    s = s.replace(/one/gi, 1);
    s = s.replace(/two/gi, 2);
    s = s.replace(/three/gi, 3);
    s = s.replace(/four/gi, 4);
    s = s.replace(/five/gi, 5);
    s = s.replace(/six/gi, 6);
    s = s.replace(/seven/gi, 7);
    s = s.replace(/eight/gi, 8);
    s = s.replace(/nine/gi, 9);
    
    answer = Number(s);
    
    return answer;
  
   
}