function solution(brown, yellow) {
  var answer = [];
  console.log(measureMake(brown + yellow));
  console.log(measureMake(yellow));
  //measureMake(yellow)=이거보다 최소 높이가 2이상 더 커야하며, 이 가로보다 2이상 더 커야함.
  var big_box = measureMake(brown + yellow);
  var small_box = measureMake(yellow);
  for (var j = 0; j < small_box.length; j++) {
    const [a, b] = small_box[j];
    for (var i = 0; i < big_box.length; i++) {
      const [x, y] = big_box[i];
      if (x >= a + 2 && y >= b + 2) {
        answer.push(x, y);
        return answer;
      }
    }
  }
  return answer;
}

function measureMake(num) {
  var tmp = [];

  for (var i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      tmp.push([num / i, i]);
    }
  }
  return tmp;
}
