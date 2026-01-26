function solution(numbers) {
  var answer = 0;
  var inputarr = numbers.split("");
  var allArr = [];
  for (var i = 1; i < inputarr.length + 1; i++) {
    allArr.push(...permutation(inputarr, i));
  }
  console.log(allArr);
  var uniqueArr = [...new Set(allArr)];
  uniqueArr.forEach((ele) => {
    if (isPrime(ele)) answer++;
  });

  return answer;
}

function permutation(arr, n) {
  let result = [];
  const visited = Array(arr.length).fill(false);

  function dfs(current) {
    if (current.length === n) {
      result.push(Number(current.join("")));
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        current.push(arr[i]);
        dfs(current);
        current.pop();
        visited[i] = false;
      }
    }
  }
  dfs([]);

  return result;
}
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (var i = 2; i < Math.ceil(num / 2); i++) if (num % i === 0) return false;

  return true;
}
