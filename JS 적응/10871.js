const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on('line', (line) => {
  input.push(line.trim());
  if (input.length === 2) rl.close();
});
rl.on('close', () => {
  const [N, X] = input[0].split(' ').map(Number);
  const A = input[1].split(' ').map(Number);
  let result = A.filter((item) => item < X);

  console.log(result.join(' '));
  process.exit();
});
