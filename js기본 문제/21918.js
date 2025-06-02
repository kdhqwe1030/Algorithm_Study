const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let icount = 0;
let n = 0;
let arr = [];
rl.on('line', (line) => {
  if (icount === 0) [n, m] = line.split(' ').map(Number);
  else if (icount === 1) arr = line.split(' ').map(Number);
  else {
    input.push(line.split(' ').map(Number));
  }
  icount++;
  if (icount === m + 2) rl.close();
});
rl.on('close', () => {
  for (let i = 0; i < m; i++) {
    if (input[i][0] === 1) arr[input[i][1] - 1] = input[i][2];
    else if (input[i][0] === 2)
      for (let j = input[i][1] - 1; j < input[i][2]; j++)
        arr[j] = arr[j] === 1 ? 0 : 1;
    else if (input[i][0] === 3)
      for (let j = input[i][1] - 1; j < input[i][2]; j++) arr[j] = 0;
    else if (input[i][0] === 4)
      for (let j = input[i][1] - 1; j < input[i][2]; j++) arr[j] = 1;
  }
  console.log(arr.join(' '));
  process.exit();
});
