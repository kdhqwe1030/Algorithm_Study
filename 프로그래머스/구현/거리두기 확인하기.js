function solution(places) {
  var answer = [];
  var field = [];
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) field.push(places[i][j].split(""));

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    var visited = Array.from({ length: 5 }, () => Array(5).fill(false));

    function dfs(x, y, cnt) {
      if (field[y][x] === "P" && cnt !== 0) return false;
      if (cnt === 2) return true;
      for (var i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (ny >= 0 && ny < 5 && nx >= 0 && nx < 5)
          if (!visited[ny][nx] && field[ny][nx] !== "X") {
            visited[ny][nx] = true;
            result = dfs(nx, ny, cnt + 1);
            if (!result) return false;
          }
      }
      return true;
    }

    var tmp = 1;
    for (var k = 0; k < 5; k++) {
      for (var l = 0; l < 5; l++) {
        if (field[k][l] === "P") {
          visited[k][l] = true;
          if (!dfs(l, k, 0)) tmp = 0;
        }
      }
    }
    ///1이면 잘 통과,0이면 실패
    if (tmp) answer.push(1);
    else answer.push(0);

    field = [];
  }

  return answer;
}
