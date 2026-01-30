function solution(board) {
  var answer = 0;
  const arr = Array(9).fill(0);
  for (var i = 0; i < 3; i++) {
    const grid = board[i].split("");
    for (var j = 0; j < 3; j++) {
      if (grid[j] === "O") arr[i * 3 + j] = 1;
      else if (grid[j] === "X") arr[i * 3 + j] = -1;
    }
  }
  var countO = 0;
  var countX = 0;
  var isWin = 0;
  for (const ele of arr) {
    if (ele === 1) countO++;
    else if (ele === -1) countX++;
  }

  const winLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let oWin = false;
  let xWin = false;

  for (const [a, b, c] of winLines) {
    const s = arr[a] + arr[b] + arr[c];
    if (s === 3) oWin = true;
    if (s === -3) xWin = true;
  }

  if (countO < countX) return 0;
  if (countO - countX >= 2) return 0;

  if (oWin && xWin) return 0;
  if (oWin && countO !== countX + 1) return 0;
  if (xWin && countO !== countX) return 0;

  return 1;
}
