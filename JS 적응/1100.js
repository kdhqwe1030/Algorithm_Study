const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
let count = 0;
rl.on('line', (line) => {
  input.push(line.split(''));

  if (input.length === 8) rl.close();
});

rl.on('close', () => {
  input.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (rowIndex % 2 === 0) {
        if (colIndex % 2 === 0 && col === 'F') count++;
      } else {
        if (colIndex % 2 === 1 && col === 'F') count++;
      }
    });
  });
  console.log(count);
  process.exit();
});
