function solution(maps) {
    const xLength = maps.length; // 행
	const yLength = maps[0].length; // 열
	const dx = [-1, 1, 0, 0];  // 좌표이동  상,하,좌,우 순으로
	const dy = [0, 0, -1, 1];  
    
    function bfs() {
        const queue = [[0,0,1]]
        
        while(queue.length){
            let [x,y,count] = queue.shift();
            if(x === xLength -1 && y === yLength -1){
                return count
            }
            if(maps[x][y]){
                maps[x][y] = 0;
                for(let i= 0; i<4; i++){
                    const nx = x + dx[i]
                    const ny = y + dy[i]
                    if(nx >= 0 && nx < xLength && ny >= 0 && ny < yLength && maps[nx][ny]){
                        queue.push([nx,ny, count + 1])
                    }
                }
            }
            
            
        }// while 끝
            return -1
        }// bfs끝
    
    
	
return bfs()
}