// 메모이제이션 복습

function solution(n, r) {
    let answer;
    const dy = Array.from((Array(35)), () => Array(35).fill(0)) // 35 * 35 이차원배열
    function DFS(n, r) {
        if( dy[n][r] > 0) return dy[n][r]
        if(n === r || r === 0) return 1
        else return dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r)
    }
    answer = DFS(n, r)
    return answer;
}

// console.log(solution(5, 3))
console.log(solution(33, 19))