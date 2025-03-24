const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let cnt = 0;

let N = 0,
  K = 0,
  M = 0;
let field = [];
let target = [];
// 배열크기 N개의 줄 k크기 K의 줄 수
rl.on('line', (line) => {
  if (cnt == 0) {
    [N, M] = line.trim().split(' ').map(Number);
  } else if (cnt < N + 1) {
    field.push(line.trim().split(' ').map(Number));
  } else if (cnt === N + 1) {
    K = parseInt(line.trim());
  } else if (cnt < N + K + 2) {
    target.push(line.trim().split(' ').map(Number));
  }
  cnt++;
  if (cnt === N + K + 2) rl.close();
});
rl.on('close', () => {
  for (let m = 0; m < K; m++) {
    const [i, j, x, y] = target[m];
    let result = 0;
    field.forEach((row, rowIndex) => {
      if (i - 1 <= rowIndex && rowIndex <= x - 1) {
        row.forEach((col, colIndex) => {
          if (j - 1 <= colIndex && colIndex <= y - 1) {
            result += col;
          }
        });
      }
    });
    console.log(result);
  }

  process.exit();
});
