const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let icount = 0;
let n = 0;
let arr = [];

let result = [];
rl.on('line', (line) => {
  if (icount === 0) n = Number(line);
  else arr.push(line.split(' ').map(Number));

  if (icount === n) rl.close();
  icount++;
});

let end_time = 0;
let count = 0;
rl.on('close', () => {
  arr.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < arr.length - 1; i++) {
    end_time = 0;
    count = 0;
    for (let j = i; j < arr.length; j++) {
      if (arr[j][0] >= end_time) {
        count++;
        end_time = arr[j][1];
      }
    }
    result.push(count);
  }
  console.log(Math.max(...result));
  process.exit();
});
