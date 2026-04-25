//구현 문제
//map 자료구조 사용 및 슬라이딩 윈도우 문제

function solution(want, number, discount) {
  var answer = 0;
  var wantMap = new Map();
  for (var i = 0; i < want.length; i++) wantMap.set(want[i], number[i]);

  for (var i = 0; i < 10; i++) {
    const tmp = discount[i];
    if (wantMap.has(tmp)) wantMap.set(tmp, wantMap.get(tmp) - 1);
  }
  isAllWant(wantMap);
  for (var i = 10; i < discount.length; i++) {
    var first = discount[i - 10];
    var next = discount[i];

    if (wantMap.has(first)) wantMap.set(first, wantMap.get(first) + 1);
    if (wantMap.has(next)) wantMap.set(next, wantMap.get(next) - 1);
    isAllWant(wantMap);
  }

  function isAllWant(arr) {
    var result = true;
    arr.forEach((a) => {
      if (a > 0) result = false;
    });
    if (result) answer++;
  }
  return answer;
}
