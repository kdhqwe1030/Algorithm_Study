// [유형] DP (경로 최댓값)

// [문제 구조]
// - 매 위치에서 선택지 2개 (위 / 위왼쪽)
// - 이전 결과를 재사용 → DP
// - 누적하면서 최댓값 갱신

// [핵심]
// "이전 상태 2개 중 큰 값 선택 → 누적"

// [점화식]
// dp[i][j] = max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
// (양 끝은 한 방향만 가능)

// [정답]
// 마지막 줄 최댓값

function solution(triangle) {
  var answer = 0;
  // var dp=Array.from({length:triangle.length},()=>Array(triangle.length).fill(0)); 시간 초과 발생 딱 맞는 배열 사이즈로 만들자!

  var dp = [];
  for (var i = 0; i < triangle.length; i++) dp.push(Array(i + 1).fill(0));

  dp[0][0] = triangle[0][0];

  for (var i = 1; i < triangle.length; i++) {
    for (var j = 0; j <= i; j++) {
      if (j === 0) dp[i][j] = dp[i - 1][j] + triangle[i][j];
      else if (j === i) dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      else dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
    }
  }

  for (var i = 0; i < triangle.length; i++)
    if (dp[triangle.length - 1][i] > answer)
      answer = dp[triangle.length - 1][i];

  return answer;
}
