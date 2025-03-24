const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let cnt = 0;
let K = 0;

rl.on('line', (line) => {
  if (cnt === 0) K = parseInt(line.trim());
  else if (cnt < K + 1) {
    tmpInput = parseInt(line.trim());
    if (tmpInput) input.push(tmpInput);
    else input.pop();
  }
  cnt++;
  if (cnt === K + 1) rl.close();
});
rl.on('close', () => {
  let result = 0;
  input.forEach((item) => {
    result += item;
  });
  console.log(result);
});
