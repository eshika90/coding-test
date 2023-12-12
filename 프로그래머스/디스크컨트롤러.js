// 작업은 한 번에 하나의 요청만 수행할 수 있음
// a. 요청한 작업을 순서대로 처리하는 평균 시간
// b. 요청을 짧은 순으로 처리하는 평균 시간
// jobs = [요청되는 시점, 소요시간]을 담은 2차원 배열
// b의 평균시간을 반환 (소수점 이하의 수는 버림) 

// 1. job의 소요시간이 짧은 순으로 정렬
// 2. 소요시간이 같다면 요청되는 시점이 작을 수록 우선순위가 높다.
// 3. 대기시간은 항상 +1 이 있다. 
// 4. 첫 번째는 소요시간, 두 번째 부터 끝까지는 소요시간 + 1이 걸린다.
// 4-1. 첫 번째로 온 요청은 항상 먼저 실행됨
// 5. 총 걸린시간이 있는 배열을 받아 각 값을 더한 후 배열의 크기만큼 나눠준 값을 반환
// 문제의 의도 : Shortest Job First
function solution(jobs) {
    const count = jobs.length;
    const minHeap = new MinHeap();
    jobs.sort((a,b) => a[0]-b[0]);
    
    let time = 0;
    let complete = 0;
    let total = 0;
    
    while(jobs.length || minHeap.size()) {
      while(jobs.length) {
        if(jobs[0][0] === time) {
          minHeap.heappush(jobs.shift());
        } else break;
      }
      
      if(minHeap.size() && time >= complete) {
        const task = minHeap.heappop();
        complete = task[1] + time;
        total += complete - task[0];
      }
      time++;
    }
    
    return total / count >> 0;
  }
  
  class MinHeap {
      constructor() {
          this.heap = [ null ];
      }
      
      size() {
          return this.heap.length - 1;
      }
      
      getMin() {
          return this.heap[1] ? this.heap[1] : null;
      }
      
      swap(a, b) {
          [ this.heap[a], this.heap[b] ] = [ this.heap[b], this.heap[a] ];
      }
      
      heappush(value) {
          this.heap.push(value);
          let curIdx = this.heap.length - 1;
          let parIdx = (curIdx / 2) >> 0;
          
          while(curIdx > 1 && this.heap[parIdx][1] > this.heap[curIdx][1]) {
              this.swap(parIdx, curIdx)
              curIdx = parIdx;
              parIdx = (curIdx / 2) >> 0;
          }
      }
      
      heappop() {
          const min = this.heap[1];	
          if(this.heap.length <= 2) this.heap = [ null ];
          else this.heap[1] = this.heap.pop();   
          
          let curIdx = 1;
          let leftIdx = curIdx * 2;
          let rightIdx = curIdx * 2 + 1; 
          
          if(!this.heap[leftIdx]) return min;
          if(!this.heap[rightIdx]) {
              if(this.heap[leftIdx][1] < this.heap[curIdx][1]) {
                  this.swap(leftIdx, curIdx);
              }
              return min;
          }
  
          while(this.heap[leftIdx][1] < this.heap[curIdx][1] || this.heap[rightIdx][1] < this.heap[curIdx][1]) {
              const minIdx = this.heap[leftIdx][1] > this.heap[rightIdx][1] ? rightIdx : leftIdx;
              this.swap(minIdx, curIdx);
              curIdx = minIdx;
              leftIdx = curIdx * 2;
              rightIdx = curIdx * 2 + 1;
              
              if(leftIdx >= this.size()) break;
          }
  
          return min;
      }
  }
const jobs = [[0, 3], [1, 9], [2, 6]]
const answer = solution(jobs)
console.log(answer)