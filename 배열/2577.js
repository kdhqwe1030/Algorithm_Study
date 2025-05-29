const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;
rl.on('line', (line) => {
  input.push(line);
  if (count == 2) rl.close();
  count++;
});
rl.on('close', () => {
  let cal = 1;
  let result = Array(10).fill(0);

  for (const item of input) cal = Number(item) * cal;
  for (const item of String(cal)) result[item]++;

  for (const item of result) console.log(item);
});
