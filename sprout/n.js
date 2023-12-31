const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// INPUT : 첫 줄에 100,000보다 작거나 같은 자연수 N
let result = '';

rl.on('line', (line)=>{
    const N = parseInt(line)
    for (let i=1; i<=N; i++) {
        result += i + '\n'
    }
    rl.close()
})
rl.on('close', ()=> {
    console.log(result)
    process.exit()
})
// 반복문 내 console.log를 돌리면 시간초과가 뜸
// 그래서 변수에 값들을 할당한 후 프로그램이 종료될 시 한 번에 출력하도록 변경