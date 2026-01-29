function solution(answers) {
  var answer = [];
  const a = [1, 2, 3, 4, 5]; //5
  const b = [2, 1, 2, 3, 2, 4, 2, 5]; //8
  const c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //10

  const score = { 1: 0, 2: 0, 3: 0 };

  for (var i = 0; i < answers.length; i++) {
    if (a[i % 5] === answers[i]) score[1] += 1;
    if (b[i % 8] === answers[i]) score[2] += 1;
    if (c[i % 10] === answers[i]) score[3] += 1;
  }
  const max = Math.max(score[1], score[2], score[3]);

  for (const [k, v] of Object.entries(score))
    if (max === v) answer.push(Number(k));

  return answer;
}
