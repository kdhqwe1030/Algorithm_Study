function solution(n, costs) {
  var answer = 0;
  const arr = Array(n)
    .fill(0)
    .map((val, idx) => idx);
  costs.sort((a, b) => a[2] - b[2]);

  for (var i = 0; i < costs.length; i++) {
    const a = costs[i][0];
    const b = costs[i][1];

    if (isUnion(arr, a, b)) continue;

    const ra = find(arr, a);
    const rb = find(arr, b);
    if (ra !== rb) arr[rb] = ra;

    answer += costs[i][2];
  }

  return answer;
}
function find(arr, x) {
  if (arr[x] === x) return x; //나 자신이라면
  const parent = find(arr, arr[x]); // 부모
  arr[x] = parent; //경로압축
  return arr[x];
}
function isUnion(arr, a, b) {
  var A = find(arr, a);
  var B = find(arr, b);
  if (A === B) return true;
  else return false;
}

// costs의 길이 5000
