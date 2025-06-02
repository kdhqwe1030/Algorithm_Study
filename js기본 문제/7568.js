const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let icount = 0;
let n = 0;
let input = [];

rl.on('line', (line) => {
  if (icount === 0) n = Number(line);
  else {
    const [weight, height] = line.split(' ').map(Number);
    input.push({ weight: weight, height: height });
  }
  if (icount === n) rl.close();
  icount++;
});

rl.on('close', () => {
  for (let i = 0; i < n; i++) {
    let count = 1;
    for (let j = 0; j < n; j++) {
      if (i == j) continue;
      if (
        input[i].weight < input[j].weight &&
        input[i].height < input[j].height
      )
        count++;
    }
    input[i] = { ...input[i], grade: count };
  }
  const result = input.map((item) => item.grade);
  console.log(result.join(' '));
  process.exit();
});
