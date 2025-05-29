const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on('line', (line) => {
  input = line;
  rl.close();
});

rl.on('close', () => {
  const result = Array(26).fill(0);
  for (let i = 0; i < input.length; i++) {
    result[input[i].charCodeAt() - 97]++;
  }

  console.log(...result);
  process.exit();
});
