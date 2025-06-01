const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let count = 0;
let maxCount = 0;

const gcd = (a, b) => {
  let aNum = a,
    bNum = b;

  while (bNum > 0) {
    let tmp = aNum;
    aNum = bNum;
    bNum = tmp % bNum;
  }
  return aNum;
};

rl.on('line', (line) => {
  if (count == 0) maxCount = line;
  else {
    input = line.split(' ').map(Number);

    console.log((input[0] * input[1]) / gcd(input[0], input[1]));
  }
  if (count == maxCount) rl.close();
  count++;
});
rl.on('close', () => {
  process.exit();
});
