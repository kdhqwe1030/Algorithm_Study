const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let count = 0;
let n = 0;
let m = 0;
let input = [];
let name = '';
let target = '';
let arr = 0;
let goalaResult;
rl.on('line', (line) => {
  if (!count) {
    [n, m] = line.split(' ').map(Number);
    arr = new Array(n + 1).fill(null).map(() => []);
    goalaResult = parseInt(new Array(m).fill(1).join(''), 2);
  } else {
    [name, target] = line.split(' ');
    input.push([...target].map((char) => (char === 'Y' ? '1' : '0')).join(''));
  }
  if (n === count) rl.close();
  count++;
});

rl.on('close', () => {
  const comb = [];
  //n input배열 길이
  for (let mask = 0; mask < 1 << n; mask++) {
    let subset = [];

    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subset.push(input[i]);
      }
    }
    arr[subset.length].push(subset);
  }

  for (let i = 0; i < n; i++) {
    arr[i].forEach((ele) => {
      let result = 0;
      ele.forEach((item) => (result = result | parseInt(item, 2)));

      if (goalaResult === result) {
        console.log(i);
        process.exit();
      }
    });
  }
  console.log(-1);
  process.exit();
});
