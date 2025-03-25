const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let cnt = 0;
let N = 0;
let stack = [];

const isEmpty = () => {
  if (stack.length === 0) return true;
  else return false;
};

rl.on('line', (line) => {
  if (cnt === 0) N = parseInt(line.trim());
  else if (cnt <= N + 1) {
    input.push(line.trim().split(' '));
  }
  cnt++;
  if (cnt === N + 1) rl.close();
});
rl.on('close', () => {
  for (let i = 0; i < N; i++) {
    if (input[i][0] === 'push') stack.push(input[i][1]);
    else if (input[i][0] === 'pop') {
      if (isEmpty()) console.log(-1);
      else console.log(stack.pop());
    } else if (input[i][0] === 'size') console.log(stack.length);
    else if (input[i][0] === 'empty') {
      if (isEmpty()) console.log(1);
      else console.log(0);
    } else if (input[i][0] === 'top') {
      if (isEmpty()) console.log(-1);
      else console.log(stack.at(-1));
    }
  }

  process.exit();
});
