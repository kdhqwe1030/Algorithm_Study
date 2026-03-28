function solution(N, number) {
  let answer = -1;
  if (N === number) return 1;
  const arr = Array.from({ length: 9 }, () => new Set());
  for (var i = 1; i < 9; i++) arr[i].add(Number(String(N).repeat(i)));

  for (var i = 2; i < 9; i++) {
    for (var j = 1; j < i; j++) {
      for (const ele of allCase(arr[j], arr[i - j])) {
        arr[i].add(ele);
      }
    }
    if (arr[i].has(number)) {
      answer = i;
      break;
    }
  }

  return answer;
}

function allCase(la, lb) {
  const list = new Set();
  for (const a of la) {
    for (const b of lb) {
      list.add(a + b);
      list.add(a - b);
      list.add(a * b);
      list.add(a / b);
      list.add(b - a);
      list.add(b / a);
    }
  }
  return list;
}
