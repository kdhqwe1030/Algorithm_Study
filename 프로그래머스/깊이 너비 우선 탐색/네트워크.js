class Node {
  constructor(x) {
    this.data = x;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  length() {
    return this.size;
  }

  push(x) {
    const node = new Node(x);
    if (this.length() === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;

    return;
  }
  shift() {
    if (this.length() === 0) return;
    const tmp = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return tmp.data;
  }
}

function solution(n, computers) {
  var answer = 0;
  const visited = Array(n).fill(false);

  function bfs(start) {
    const queue = new Queue();
    queue.push(start);
    visited[start] = true;

    while (queue.length() > 0) {
      const x = queue.shift();
      for (var i = 0; i < n; i++) {
        if (x === i) continue;
        if (!visited[i] && computers[x][i]) {
          queue.push(i);
          visited[i] = true;
        }
      }
    }
  }

  for (var i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }

  return answer;
}
