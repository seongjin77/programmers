function solution(array) {

    
    let copy = [...array];
    let result = {};
    
    for(let i of array){
        result[i] = 0;
    }
    
    for(let i of array){
        
        if(copy.includes(i)){
            copy.splice(copy.indexOf(i),1);
            result[i]++
        }
    }
    
    result = Object.entries(result);
    //console.log(result)
    result.sort((a,b) => b[1] - a[1])
    console.log(result)
    
    return (result.length === 1 || result[0][1] > result[1][1]) ? parseInt(result[0][0]) : -1;
        
    
}