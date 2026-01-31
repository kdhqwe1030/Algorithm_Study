function solution(tickets) {
  var answer = ["ICN"];
  const visited = Array(tickets.length).fill(false);
  tickets.sort((a, b) => a[1].localeCompare(b[1]));

  function dfs(cur, cnt) {
    if (cnt === tickets.length) return true;

    for (var i = 0; i < tickets.length; i++) {
      const [startNode, endNode] = tickets[i];
      if (!visited[i] && startNode === cur) {
        visited[i] = true;
        answer.push(endNode);
        if (dfs(endNode, cnt + 1)) return true;
        answer.pop();
        visited[i] = false;
      }
    }

    return false;
  }

  dfs("ICN", 0);
  return answer;
}
