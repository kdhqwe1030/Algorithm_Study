function solution(k, dungeons) {
  var answer = 0;
  // permutation(dungeons,dungeons.length);
  const all_List = permutation(dungeons, dungeons.length);
  for (var i = 0; i < all_List.length; i++) {
    var tmp_k = k;
    var count = 0;
    for (var j = 0; j < dungeons.length; j++) {
      if (tmp_k >= all_List[i][j][0]) {
        tmp_k -= all_List[i][j][1];
        count++;
      } else break;
    }
    answer = Math.max(answer, count);
    if (count === dungeons.length) break;
  }
  return answer;
}

function permutation(arr, n) {
  const result = [];
  const visited = Array(arr.length).fill(false);

  function dfs(cur) {
    if (cur.length === n) {
      result.push([...cur]);
      return;
    }
    for (var i = 0; i < arr.length; i++)
      if (!visited[i]) {
        visited[i] = true;
        cur.push(arr[i]);
        dfs(cur);
        cur.pop();
        visited[i] = false;
      }
  }

  dfs([]);
  return result;
}
