function solution(begin, target, words) {
  var answer = 0;
  const visited = Array(words.length).fill(false);

  const queue = [[begin, 0]];

  while (queue.length > 0) {
    const [cur, cnt] = queue.shift();
    if (cur === target) return cnt;

    for (var i = 0; i < words.length; i++) {
      if (!visited[i] && isOneDif(cur, words[i])) {
        visited[i] = true;
        queue.push([words[i], cnt + 1]);
      }
    }
  }

  return answer;
}

function isOneDif(a, b) {
  var count = 0;
  //a를 기준으로

  const aList = a.split("").map((ele) => ele.charCodeAt());
  const bList = b.split("").map((ele) => ele.charCodeAt());

  for (var i = 0; i < aList.length; i++) {
    if (aList[i] - bList[i] !== 0) count++;
    if (count > 1) return false;
  }
  if (count === 1) return true;
  else return false;
}
