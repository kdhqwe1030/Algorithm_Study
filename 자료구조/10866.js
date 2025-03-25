const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let cnt = 0;
let N = 0;
let deque = [];

const isEmpty = () => {
  if (deque.length === 0) return true;
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
    if (input[i][0] === 'push_back') deque.push(input[i][1]);
    else if (input[i][0] === 'push_front') deque.unshift(input[i][1]);
    else if (input[i][0] === 'pop_front') {
      if (isEmpty()) console.log(-1);
      else console.log(deque.shift());
    } else if (input[i][0] === 'pop_back') {
      if (isEmpty()) console.log(-1);
      else console.log(deque.pop());
    } else if (input[i][0] === 'size') console.log(deque.length);
    else if (input[i][0] === 'empty') {
      if (isEmpty()) console.log(1);
      else console.log(0);
    } else if (input[i][0] === 'front') {
      if (isEmpty()) console.log(-1);
      else console.log(deque[0]);
    } else if (input[i][0] === 'back') {
      if (isEmpty()) console.log(-1);
      else console.log(deque.at(-1));
    }
  }

  process.exit();
});
