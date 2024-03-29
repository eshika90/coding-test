// 섬나라 아일랜드 DFS 활용
// N * N 지도가 격자판의 정보로 주어진다.
// 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며,
// 0은 바다이다. 섬나가 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램 작성

function solution(board){  
    let answer=0;
    const n = board.length;
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dy = [0, 1, 1, 1, 0, -1, -1, -1];
    
    function DFS(x, y) {
        board[x][y] = 0;
        for(let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            if(nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
                DFS(nx, ny)
            }
        }
    }
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j ++) {
            if(board[i][j] === 1) {
                answer ++;
                DFS(i, j);
            }
        }
    }
    return answer;
}

let arr=[
         [1, 1, 0, 0, 0, 1, 0], 
         [0, 1, 1, 0, 1, 1, 0],
         [0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 1, 0, 0],
         [1, 0, 1, 0, 1, 0, 0]
        ];

console.log(solution(arr));