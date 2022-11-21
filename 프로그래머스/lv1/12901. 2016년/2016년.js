function solution(a, b) {
    var answer = '';
    let arr = ['SUN','MON','TUE','WED','THU','FRI','SAT']
    let day = new Date(2016,a-1,b);
    
    answer = arr[day.getDay()]
    
    
    return answer;
}