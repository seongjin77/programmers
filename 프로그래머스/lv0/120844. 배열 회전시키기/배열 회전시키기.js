function solution(numbers, direction) {
    var answer = [];
    let len = numbers.length;
    
    
    return direction === 'right' ? [numbers[len-1], ...numbers.slice(0,len-1)] : [...numbers.slice(1),numbers[0]]
    
}