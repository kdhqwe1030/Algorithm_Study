function solution(numbers, target) {
  var answer = 0;
  var arr = [];
  arr.push([numbers[0], -numbers[0]]);

  for (var i = 1; i < numbers.length; i++) {
    const tmp = [];
    arr[i - 1].forEach((ele) => {
      tmp.push(ele + numbers[i]);
      tmp.push(ele - numbers[i]);
    });
    arr.push(tmp);
  }
  arr[arr.length - 1].forEach((ele) => {
    if (ele === target) answer++;
  });
  return answer;
}
