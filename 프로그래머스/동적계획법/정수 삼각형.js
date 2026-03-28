function solution(triangle) {
  var answer = 0;
  const dp = Array.from({ length: triangle.length }, () =>
    Array(triangle[triangle.length - 1].length).fill(0),
  );
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < dp.length; i++) {
    for (let j = 0; j < i + 1; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j] + triangle[i][j],
        (j >= 1 ? dp[i - 1][j - 1] : 0) + triangle[i][j],
      );
    }
  }

  for (const v of dp[dp.length - 1]) if (v > answer) answer = v;

  return answer;
}
