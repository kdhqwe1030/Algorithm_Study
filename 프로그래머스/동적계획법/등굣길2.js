// [유형] DP (격자 경로 수)

// [문제 구조]
// - (i,j)는 위 / 왼쪽에서만 올 수 있음
// - 같은 칸에 여러 경로가 모임 → 같은 칸을 여러 번 계산

// [핵심]
// "같은 칸을 여러 번 계산 → DP로 중복 제거"
// → 경로 수 누적 (top + left)

// [점화식]
// dp[i][j] = dp[i-1][j] + dp[i][j-1]
// (물웅덩이는 0, % 1e9+7)

// [초기값]
// dp[0][0] = 1

// [정답]
// dp[n-1][m-1]

function solution(m, n, puddles) {
  var answer = 0;
  var dp = Array.from({ length: n }, () => Array(m).fill(0));
  var water = Array.from({ length: n }, () => Array(m).fill(false));
  for (var i = 0; i < puddles.length; i++) {
    const [x, y] = puddles[i];
    water[y - 1][x - 1] = true;
  }
  dp[0][0] = 1;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (i === 0 && j === 0) continue;
      if (water[i][j]) continue;

      var top = i > 0 ? dp[i - 1][j] : 0;
      var left = j > 0 ? dp[i][j - 1] : 0;

      dp[i][j] = (top + left) % 1000000007;
    }
  }

  answer = dp[n - 1][m - 1];
  return answer;
}
