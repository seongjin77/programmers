function solution(str) {

    
    function 재귀(str){
        if(str.length === 0){
            return str
        }
       return 재귀(str.slice(1)) + str[0]
    }
    
    return 재귀(str)
}