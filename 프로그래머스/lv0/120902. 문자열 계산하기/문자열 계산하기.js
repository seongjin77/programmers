function solution(my_string) {

    
   
    let arr = my_string.split(' ');
    let num = parseInt(arr[0]);
    arr.map((v,i) => {
        if(v === '+'){
            num += parseInt(arr[i+1])
        }
        else if(v === '-'){
            num -= parseInt(arr[i+1])
        }
    })


    return num;
}