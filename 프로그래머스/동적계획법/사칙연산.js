// [유형] 구간 DP

// [문제 구조]
// - 연산자 기준으로 좌/우 분할
// - 부분 구간 결과로 전체 계산

// [핵심]
// 최댓값 + 최솟값 둘 다 관리 ('-' 때문)

// [점화식]
// '+' → max+max, min+min
// '-' → max-min, min-max

// [순서]
// 작은 구간 → 큰 구간

// [정답]
// dp_max[0][n-1]

function solution(arr) {
  var answer = -1;
  var n = arr.length;
  var dp_max = Array.from({ length: n }, () => Array(n).fill(-Infinity));
  var dp_min = Array.from({ length: n }, () => Array(n).fill(Infinity));

  // 왼쪽:  dp[i][k]
  // 오른쪽: dp[k+2][j]
  // 연산자: arr[k+1]

  for (var len = 0; len < n; len += 2) {
    for (var i = 0; i < n; i += 2) {
      var j = i + len;
      if (j >= n) break;
      if (i === j) {
        dp_max[i][i] = Number(arr[i]);
        dp_min[i][i] = Number(arr[i]);
        continue;
      }

      for (var k = i; k < j; k += 2) {
        if (arr[k + 1] === "+") {
          dp_max[i][j] = Math.max(
            dp_max[i][j],
            dp_max[i][k] + dp_max[k + 2][j],
          );
          dp_min[i][j] = Math.min(
            dp_min[i][j],
            dp_min[i][k] + dp_min[k + 2][j],
          );
        } else {
          dp_max[i][j] = Math.max(
            dp_max[i][j],
            dp_max[i][k] - dp_min[k + 2][j],
          );
          dp_min[i][j] = Math.min(
            dp_min[i][j],
            dp_min[i][k] - dp_max[k + 2][j],
          );
        }
      }
    }
  }
  answer = dp_max[0][n - 1];
  return answer;
}
