// [유형] DP (선형 → 원형 DP 변형)
// - 인접한 집을 동시에 선택할 수 없음 → House Robber 유형
// - 원형 구조이므로 첫 집과 마지막 집도 인접
// → 따라서 경우를 2개로 나눠서 해결해야 함

// [핵심 아이디어]
// 1) 첫 집을 선택하는 경우 → 마지막 집 선택 불가 (0 ~ n-2)
// 2) 첫 집을 선택하지 않는 경우 → 마지막 집 선택 가능 (1 ~ n-1)
// → 두 경우를 각각 선형 DP로 계산 후 최댓값 선택

// [DP 정의]
// dp[i]: i번째 집까지 고려했을 때 훔칠 수 있는 최대 금액

// [점화식]
// - 현재 집을 털지 않는 경우 → dp[i-1]
// - 현재 집을 터는 경우 → dp[i-2] + money[i]
// → dp[i] = Math.max(dp[i-1], dp[i-2] + money[i])

// [요약]
// "원형 구조 → 양 끝 동시 선택 불가 → 2가지 경우로 나눠 선형 DP 수행"

function solution(money) {
  var answer = 0;
  var n = money.length;

  var dp = Array(n).fill(0);

  for (var i = 0; i < n - 1; i++) {
    if (i === 0) {
      dp[0] = money[0];
    } else if (i === 1) {
      dp[1] = Math.max(money[0], money[1]);
    } else dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[i]);
  }
  answer = dp[n - 2];
  dp = Array(n).fill(0);

  for (var i = 1; i < n; i++) {
    if (i === 1) {
      dp[1] = money[1];
    } else dp[i] = Math.max(dp[i - 1], dp[i - 2] + money[i]);
  }

  answer = answer > dp[n - 1] ? answer : dp[n - 1];

  return answer;
}
