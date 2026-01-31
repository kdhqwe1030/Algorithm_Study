function solution(game_board, table) {
  var answer = 0;
  const size = table.length;
  const tableVisited = Array.from({ length: size }, () =>
    Array(size).fill(false),
  );
  const gameVisited = Array.from({ length: size }, () =>
    Array(size).fill(false),
  );

  const tableShapeList = [];

  for (var i = 0; i < size; i++)
    for (var j = 0; j < size; j++) {
      if (tableVisited[i][j] || table[i][j] === 0) continue;
      const tmp_result = bfs(j, i, table, tableVisited, size, 1);
      tableShapeList.push(rotate(tmp_result));
    }
  // console.log(tableShapeList);

  for (var i = 0; i < size; i++)
    for (var j = 0; j < size; j++) {
      if (gameVisited[i][j] || game_board[i][j] === 1) continue;
      const target = bfs(j, i, game_board, gameVisited, size, 0);
      answer += findMatch(target, tableShapeList);
    }

  return answer;
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(startX, startY, grid, visited, size, targetValue) {
  const shape = [];
  const queue = [[startX, startY]];
  visited[startY][startX] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    shape.push([x, y]);
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (0 <= nx && nx < size && 0 <= ny && ny < size)
        if (!visited[ny][nx] && grid[ny][nx] === targetValue) {
          visited[ny][nx] = true;
          queue.push([nx, ny]);
        }
    }
  }

  const minX = Math.min(...shape.map(([x]) => x));
  const minY = Math.min(...shape.map(([, y]) => y));
  const normalized = shape.map(([x, y]) => [x - minX, y - minY]);
  normalized.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return normalized;
}

function rotate(diagram) {
  const allRotate = [diagram];
  for (var i = 0; i < 3; i++) {
    const result = rightRotate(allRotate[i]);
    allRotate.push(result);
  }

  return { size: diagram.length, allShape: allRotate, use: false };
}

function rightRotate(shape) {
  var rotated = shape.map(([x, y]) => [y, -x]);

  const minX = Math.min(...rotated.map(([x]) => x));
  const minY = Math.min(...rotated.map(([, y]) => y));

  rotated = rotated.map(([x, y]) => [x - minX, y - minY]);
  rotated.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  return rotated;
}

function findMatch(target, tableShapeList) {
  var tmp_answer = 0;

  for (var i in tableShapeList) {
    //사용한 적이 없고, size가 같으면 검증 시작
    if (
      target.length === tableShapeList[i].size &&
      tableShapeList[i].use === false
    ) {
      //모든 회전 방향 돌려보기
      for (var j in tableShapeList[i].allShape)
        if (
          JSON.stringify(target) ===
          JSON.stringify(tableShapeList[i].allShape[j])
        ) {
          //일치하는 경우
          tableShapeList[i].use = true; //사용했다로 변경
          tmp_answer += tableShapeList[i].size;
          return tmp_answer;
        }
    }
  }
  return tmp_answer;
}
