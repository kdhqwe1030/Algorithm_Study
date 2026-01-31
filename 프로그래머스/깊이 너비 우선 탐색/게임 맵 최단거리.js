class Node {
  constructor([y, x]) {
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
    return this.size === 0 ? true : false;
  }
  push([y, x]) {
    const tmp = new Node([y, x]);
    if (this.first === null && this.last === null) {
      this.first = tmp;
      this.last = tmp;
    } else {
      this.last.next = tmp;
      this.last = tmp;
    }
    this.size++;
  }
  shift() {
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

function solution(maps) {
  var n = maps.length;
  var m = maps[0].length;
  const visited = Array.from(Array(n), () => Array(m).fill(false));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  //도착 못한 경우
  maps[n - 1][m - 1] = -1;
  const queue = new Queue();

  const bfs = () => {
    var row = 0;
    var col = 0;
    queue.push([0, 0]);
    visited[0][0] = true;

    while (!queue.isEmpty()) {
      [row, col] = queue.shift();

      for (var i = 0; i < 4; i++) {
        const y = row + dy[i];
        const x = col + dx[i];
        if (x > -1 && x < m && y > -1 && y < n)
          if (!visited[y][x] && maps[y][x]) {
            visited[y][x] = true;
            maps[y][x] = maps[row][col] + 1;
            queue.push([y, x]);
          }
      }
    }
  };
  bfs();
  // console.log(maps)
  return maps[n - 1][m - 1];
}
