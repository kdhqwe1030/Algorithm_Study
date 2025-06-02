const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let visited = [];
let icount = 0;
let n = 2;
let m = 2;
let arr = [];
let row = 0;
let col = 0;

let dx = [1, -1, 0, 0];
let dy = [0, 0, 1, -1];
let x;
let y;
const bfs = () => {
  let queue = [[0, 0]];
  visited[0][0] = 0;
  arr[0][0] = 1;
  while (queue.length > 0) {
    [row, col] = queue.shift();

    for (let i = 0; i < 4; i++) {
      x = col + dx[i];
      y = row + dy[i];
      if (x >= 0 && x < m && y >= 0 && y < n)
        if (visited[y][x] === 1) {
          queue.push([y, x]);
          visited[y][x] = 0;
          arr[y][x] = arr[row][col] + 1;
        }
    }
  }
};

rl.on('line', (line) => {
  if (icount === 0) {
    [n, m] = line.split(' ').map(Number);
    for (let i = 0; i < n; i++) {
      arr.push(new Array(m).fill(0));
    }
  } else {
    visited.push(line.split('').map(Number));
  }
  if (icount === n) rl.close();
  icount++;
});
rl.on('close', () => {
  bfs();
  console.log(arr[n - 1][m - 1]);
  process.exit();
});
