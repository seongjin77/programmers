function solution(a, b) {



    function commonFactor(num1, num2){
        if(num1 % num2 === 0) return num2;
        else return commonFactor(num2, num1 % num2);
    }

    b = b / commonFactor(a,b)
    
    while(b % 2 === 0) b /= 2
    while(b % 5 === 0) b /= 5
    
    
    return b === 1 ? 1 : 2;

}