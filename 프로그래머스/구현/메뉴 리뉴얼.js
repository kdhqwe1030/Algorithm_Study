function solution(orders, course) {
  var answer = [];
  var result = new Map();

  for (var i = 0; i < orders.length; i++) {
    var tmp = orders[i].split("").sort();

    for (var j = 0; j < course.length; j++) {
      var combi = combination(tmp, course[j]);

      for (var k = 0; k < combi.length; k++) {
        var ele = combi[k].join("");

        if (result.has(ele)) result.set(ele, result.get(ele) + 1);
        else result.set(ele, 1);
      }
    }
  }
  for (var i = 0; i < course.length; i++) {
    var tmp = [...result].filter((v) => v[0].length === course[i]);
    if (tmp.length === 0) continue;
    var max = 0;
    tmp.forEach((v) => (max = v[1] > max ? v[1] : max));

    if (max >= 2) {
      for (var j = 0; j < tmp.length; j++) {
        if (tmp[j][1] === max) answer.push(tmp[j][0]);
      }
    }
  }
  return answer.sort();
}

function combination(arr, n) {
  let result = [];

  function dfs(current, idx) {
    if (current.length === n) {
      result.push([...current]);
      return;
    }
    for (var i = idx; i < arr.length; i++) {
      current.push(arr[i]);
      dfs(current, i + 1);
      current.pop();
    }
  }
  dfs([], 0);
  return result;
}
