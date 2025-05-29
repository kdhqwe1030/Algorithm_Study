const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let maxCount = 0;
rl.on('line', (line) => {
  if (count === 0) maxCount = Number(line);
  else {
    const [a, b] = line.split(' ');
    let aCalc = Array(26).fill(0);
    let bCalc = Array(26).fill(0);

    for (const temp of a) aCalc[temp.charCodeAt() - 97]++;
    for (const temp of b) bCalc[temp.charCodeAt() - 97]++;

    if (JSON.stringify(aCalc) === JSON.stringify(bCalc))
      console.log('Possible');
    else console.log('Impossible');
  }
  if (count === maxCount) process.exit();
  count++;
});
