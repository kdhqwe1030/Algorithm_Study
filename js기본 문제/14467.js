const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let icount = 0;
let maxCount = 0;
rl.on('line', (line) => {
  if (icount === 0) maxCount = Number(line);
  else input.push(line.split(' ').map(Number));

  if (icount === maxCount) rl.close();
  icount++;
});
const result = [];
let resultCount = 0;
rl.on('close', () => {
  for (let i = 0; i < maxCount; i++) {
    const [num, pos] = input[i];
    const index = result.findIndex((item) => item.number === num);
    if (index !== -1 && result[index].positition !== pos) {
      result[index].positition = pos;
      resultCount++;
    } else result.push({ number: num, positition: pos });
  }
  console.log(resultCount);
  process.exit();
});
