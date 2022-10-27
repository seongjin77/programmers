function solution(numbers) {
    var answer = 0;
    let len = numbers.length;
    
    numbers.sort((a,b) => a-b);
    
    
    
    return Math.max(numbers[0] * numbers[1], numbers[len-2] * numbers[len-1])
}