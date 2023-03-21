function solution(answers) {
    
    let score = []
    
    let 수포자1 = [1, 2, 3, 4, 5]
    let 수포자2 = [2, 1, 2, 3, 2, 4, 2, 5]
    let 수포자3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
 let 수포자1정답수 = answers.filter((v,i) => 수포자1[i%5] === v ).length;
 let 수포자2정답수 = answers.filter((v,i) => 수포자2[i%8] === v).length;
 let 수포자3정답수 = answers.filter((v,i) => 수포자3[i%10] === v).length;  
    
    score = [수포자1정답수,수포자2정답수,수포자3정답수]
    
    let 가장큰점수 = Math.max(수포자1정답수,수포자2정답수,수포자3정답수)
    
    let result = []
    for(let i=0; i<3; i++){
       if( score[i] === 가장큰점수 ) result.push(i+1)
    }
    
    return result
}