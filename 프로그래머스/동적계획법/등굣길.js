function solution(m, n, puddles) {
  var answer = 0;
  const dp = Array.from({ length: n }, () => Array(m).fill(0));
  const water = Array.from({ length: n }, () => Array(m).fill(false));
  for (const [x, y] of puddles) water[y - 1][x - 1] = true;
  dp[0][0] = 1;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;

      if (water[i][j]) continue;
      const left = j > 0 ? dp[i][j - 1] : 0;
      const top = i > 0 ? dp[i - 1][j] : 0;

      dp[i][j] = (top + left) % 1000000007;
    }
  }

  answer = dp[n - 1][m - 1];
  return answer;
}

//m이 가로, n이 세로 (1<= <=100)
// 시작 좌표는 1,1 / 끝나는 좌표 m,n (시작좌표 !== 끝나는좌표)
//정답은 단경로의 개수를 1,000,000,007로 나눈 나머지
// 물에 잠긴 지역 0개 이상 10개 이하
