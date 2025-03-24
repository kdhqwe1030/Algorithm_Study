const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const gcd = (a, b) => {
  if (b === 0) return a;
  return gcd(b, a % b);
};

rl.on('line', (line) => {
  const [a, b] = line.trim().split(' ').map(Number);
  const maxCommon = gcd(a, b);
  const MinCommon = maxCommon * (a / maxCommon) * (b / maxCommon);
  console.log(maxCommon);
  console.log(MinCommon);
  process.exit();
});
