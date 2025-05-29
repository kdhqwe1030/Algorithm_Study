const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let count = 0;
rl.on('line', (line) => {
  input.push(line.split(' '));

  if (count == 2) rl.close();
  count++;
});
rl.on('close', () => {
  let result = 0;
  //   console.log('input[2]', input[2]);
  for (const item of input[1]) {
    // console.log('item', item);
    if (Number(item) === Number(input[2])) result++;
  }
  console.log(result);
});
