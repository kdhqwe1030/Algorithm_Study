function solution(maps) {
  var answer = 0;
  const n = maps.length;
  const m = maps[0].length;

  var visited = Array.from({ length: n }, () => Array(m).fill(false));

  function bfs() {
    const queue = [];
    queue.push([0, 0]);
    visited[0][0] = true;

    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    while (queue.length !== 0) {
      const [x, y] = queue.shift();

      for (var i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (0 <= nx && nx < m && 0 <= ny && ny < n) {
          if (!visited[ny][nx] && maps[ny][nx]) {
            queue.push([nx, ny]);
            maps[ny][nx] = maps[y][x] + 1;
            visited[ny][nx] = true;
          }
        }
      }
    }
  }
  bfs();

  answer = maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1];
  return answer;
}
