function solution(word) {
  var answer = 0;
  const wordCanUse = ["A", "E", "I", "O", "U"];
  const wordList = [
    ...permutation(wordCanUse, 1),
    ...permutation(wordCanUse, 2),
    ...permutation(wordCanUse, 3),
    ...permutation(wordCanUse, 4),
    ...permutation(wordCanUse, 5),
  ].sort();

  for (var i = 0; i < wordList.length; i++) {
    if (JSON.stringify(wordList[i]) === JSON.stringify(word.split(""))) {
      answer = i + 1;
    }
  }
  return answer;
}

function permutation(arr, n) {
  const result = [];

  function dfs(cur) {
    if (cur.length === n) {
      result.push([...cur]);
      return;
    }

    for (var i = 0; i < arr.length; i++) {
      cur.push(arr[i]);
      dfs(cur);
      cur.pop();
    }
  }
  dfs([]);
  return result;
}
