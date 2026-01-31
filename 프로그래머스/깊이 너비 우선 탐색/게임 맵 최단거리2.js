class Node {
  constructor(y, x) {
    this.data = [y, x];
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size ? false : true;
  }
  push(y, x) {
    const tmp = new Node(y, x);
    if (this.size === 0) {
      this.first = tmp;
      this.last = tmp;
    } else {
      this.last.next = tmp;
      this.last = tmp;
    }
    this.size++;
  }
  shift() {
    if (this.size === 1) {
      const tmp = this.first;
      this.last = null;
      this.first = null;
      this.size--;
      return tmp.data;
    } else {
      const tmp = this.first;
      this.first = this.first.next;
      this.size--;
      return tmp.data;
    }
  }
}

function solution(maps) {
  var answer = 0;
  const n = maps.length;
  const m = maps[0].length;
  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function bfs() {
    const queue = new Queue();
    queue.push(0, 0);
    visited[0][0] = true;

    while (!queue.isEmpty()) {
      const [y, x] = queue.shift();

      for (var i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx >= 0 && nx < m && ny >= 0 && ny < n)
          if (maps[ny][nx] && !visited[ny][nx]) {
            queue.push(ny, nx);
            visited[ny][nx] = true;
            maps[ny][nx] = maps[y][x] + 1;
          }
      }
    }
  }
  bfs();
  answer = maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
  return answer;
}
