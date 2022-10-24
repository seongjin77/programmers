function solution(num_list) {
    let result = [0, 0];
    num_list.forEach(function(item) {
        if (item%2===0) {
        result[0] = result[0] +1;
    } else {
        result[1] = result[1] +1;
    }
    
})
    return result
}