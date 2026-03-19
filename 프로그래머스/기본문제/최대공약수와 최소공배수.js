function solution(n, m) {
  function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  var min = gcd(n, m);

  var max = 0;
  var i = 1;
  while (max <= n * m) {
    max = i * min;
    if (max % n === 0 && max % m === 0) break;
    i++;
  }
  return [min, max];
}
