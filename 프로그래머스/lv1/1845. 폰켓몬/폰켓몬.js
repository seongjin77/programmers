function solution(nums) {
    var answer = 0;
    let 종류수 = new Set(nums).size
    let 선택수 = nums.length / 2
    
    if(종류수 < 선택수){
       return answer = 종류수
    }
    else if( 종류수 >= 선택수 ){

        return answer = 선택수
    }
    
}