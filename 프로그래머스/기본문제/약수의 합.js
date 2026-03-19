function solution(n) {
  var answer = 0;
  if (n === 1) return 1;
  var arr = [];
  for (var i = 1; i <= Math.sqrt(n); i++)
    if (n % i === 0) {
      if (i === n / i) arr.push(i);
      else {
        arr.push(i);
        arr.push(n / i);
      }
    }

  arr.forEach((v) => (answer += v));

  return answer;
}
