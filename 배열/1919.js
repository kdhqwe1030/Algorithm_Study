const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let count = 0;
let str1;
let str2;
let result = 0;
rl.on('line', (line) => {
  const str1Calc = Array(26).fill(0);
  const str2Calc = Array(26).fill(0);
  if (count === 0) str1 = line;
  else {
    str2 = line;
    for (const item of str1) str1Calc[item.charCodeAt() - 97]++;
    for (const item of str2) str2Calc[item.charCodeAt() - 97]++;

    for (let i = 0; i < 26; i++) result += Math.abs(str1Calc[i] - str2Calc[i]);
    console.log(result);
    process.exit();
  }
  count++;
});
