function solution(n, wires) {
  var answer = 101;
  const graph = Array.from({ length: n + 1 }, () => []);

  for (const ele of wires) {
    graph[ele[0]].push(ele[1]);
    graph[ele[1]].push(ele[0]);
  }

  for (const ele of wires) {
    const x = bfs(n, graph, ele[0], ele[1]);
    const y = n - x;
    const diff = Math.abs(x - y);
    answer = diff < answer ? diff : answer;
  }

  return answer;
}

function bfs(n, graph, start, brokePoiont) {
  // console.log("bfs진입")
  const visited = Array(n + 1).fill(false);

  const queue = [start];
  visited[start] = true;
  visited[brokePoiont] = true;

  var count = 0;
  while (queue.length > 0) {
    const tar = queue.shift();
    // console.log(tar);
    count++;
    for (const ntar of graph[tar]) {
      if (!visited[ntar]) {
        queue.push(ntar);
        visited[ntar] = true;
      }
    }
  }
  return count;
}
