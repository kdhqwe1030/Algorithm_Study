const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let str = '';
let result = 0;
rl.on('line', (line) => {
  str = line.trim();
  rl.close();
});
rl.on('close', () => {
  const reverseStr = str.split('').reverse().join('');
  if (str === reverseStr) result = 1;
  else result = 0;
  console.log(result);
  process.exit();
});
