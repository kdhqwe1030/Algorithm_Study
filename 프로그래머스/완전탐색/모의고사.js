function solution(answers) {
  var answer = [];
  var score = [0, 0, 0];
  var p1 = [];
  var p2 = [];
  var p3 = [];
  // 10000/8
  for (var i = 0; i < 10000 / 5; i++) p1.push(...[1, 2, 3, 4, 5]);
  for (var i = 0; i < 10000 / 8; i++) p2.push(...[2, 1, 2, 3, 2, 4, 2, 5]);
  for (var i = 0; i < 10000 / 10; i++)
    p3.push(...[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);

  for (var i = 0; i < answers.length; i++) {
    if (answers[i] === p1[i]) score[0]++;
    if (answers[i] === p2[i]) score[1]++;
    if (answers[i] === p3[i]) score[2]++;
  }
  var high = Math.max(...score);
  for (var i = 0; i < 3; i++) if (score[i] === high) answer.push(i + 1);

  return answer;
}
