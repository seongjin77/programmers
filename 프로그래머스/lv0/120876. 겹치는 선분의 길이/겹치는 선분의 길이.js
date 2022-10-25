function solution(lines) {
   
    let answer_arr = [];
    
    lines.forEach((line) => {
        let Temporary_arr =[];
       for(let i=line[0]; i<=line[1]; i++){
           Temporary_arr.push(i);
       }
            answer_arr.push(Temporary_arr);
    })
    ///
    function check (어레이){

    let result=[];
    let temporary_arr1 =[]
    
    for(let i=0; i<어레이[0].length; i++){
        for(let j=0; j<어레이[1].length; j++){
            if(어레이[0][i]===어레이[1][j]) temporary_arr1.push(어레이[0][i])
        }
    }
    if(temporary_arr1.length >= 2) result.push(temporary_arr1);
    ///////////
    let temporary_arr2 =[]
    for(let i=0; i<어레이[0].length; i++){
        for(let j=0; j<어레이[2].length; j++){
            if(어레이[0][i]===어레이[2][j]) temporary_arr2.push(어레이[0][i])
        }
    }
    if(temporary_arr2.length >= 2) result.push(temporary_arr2);
    ///////////
    let temporary_arr3 =[]
    for(let i=0; i<어레이[1].length; i++){
        for(let j=0; j<어레이[2].length; j++){
            if(어레이[1][i]===어레이[2][j]) temporary_arr3.push(어레이[1][i])
        }
    }
    if(temporary_arr3.length >= 2) result.push(temporary_arr3);
    
    
    return result
}
    
    let 최종 = check(answer_arr);
////////////////
    function result(arrr){
    if(arrr.length === 0) return 0;
    else if(arrr.length === 1) return arrr[0].length-1;
    else if(arrr.length === 2) {
        for(let i=0; i<arrr[0].length; i++){
            if(!arrr[1].includes(arrr[0][i])) return arrr[0].length + arrr[1].length -2;
        }
    }
    else{
       return new Set(arrr.flat()).size -1
    }
}
    
    
    return result(최종)
}