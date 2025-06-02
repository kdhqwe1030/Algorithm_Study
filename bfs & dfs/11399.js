const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let count = 0;
rl.on('line', (line) => {
  if (count === 1) {
    input = line.split(' ').map(Number);
    rl.close();
  }
  count++;
});
let result = 0;
let time = 0;
rl.on('close', () => {
  input.sort((a, b) => a - b);

  for (let i = 0; i < input.length; i++) {
    time += input[i];
    result += time;
  }
  console.log(result);
  process.exit();
});
