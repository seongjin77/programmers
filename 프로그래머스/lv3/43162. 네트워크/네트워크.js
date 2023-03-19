function solution(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false);
    
    const dfs = (index) => {
        visited[index] = true; // 방문 표시
        for(let i= 0; i<computers[index].length; i++){
            if(!visited[i] && computers[index][i]){
                dfs(i)
            }
        }
        
    }
    
    for(let i=0; i<n; i++){
        if(!visited[i]){
            answer++
            dfs(i)
        }
    }
     
    
    return answer;
}