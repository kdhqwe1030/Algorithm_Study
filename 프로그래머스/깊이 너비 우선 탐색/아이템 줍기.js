function solution(rectangle, characterX, characterY, itemX, itemY) {
  var answer = 0;
  const grid = Array.from({ length: 102 }, () => Array(102).fill(-1));
  const visited = Array.from({ length: 102 }, () => Array(102).fill(false));

  for (var i = 0; i < rectangle.length; i++) {
    const [x1, y1, x2, y2] = rectangle[i].map((ele) => ele * 2);
    for (var y = y1; y <= y2; y++)
      for (var x = x1; x <= x2; x++) {
        if (y === y1 || y === y2 || x === x1 || x === x2) {
          if (grid[y][x] !== 0) grid[y][x] = 1;
        } else grid[y][x] = 0;
      }
  }

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const queue = [[characterX * 2, characterY * 2, 0]];
  visited[characterY * 2][characterX * 2] = true;

  while (queue.length > 0) {
    var [x, y, dist] = queue.shift();
    // console.log(x,y)
    if (x === itemX * 2 && y === itemY * 2) return dist / 2;

    for (var i = 0; i < 4; i++) {
      const [mvX, mvY] = [x + dx[i], y + dy[i]];
      if (0 <= mvY && mvY < 102 && 0 <= mvX && mvX < 102)
        if (!visited[mvY][mvX] && grid[mvY][mvX] === 1) {
          visited[mvY][mvX] = true;
          queue.push([mvX, mvY, dist + 1]);
        }
    }
  }
  return answer;
}
