function solution(sequence, k) {
  let start = 0;
  let sum = 0;
  let answer = [0, sequence.length - 1];

  for (let end = 0; end < sequence.length; end++) {
    sum += sequence[end];

    while (sum > k) {
      sum -= sequence[start];
      start++;
    }

    if (sum === k) {
      if (end - start < answer[1] - answer[0]) answer = [start, end];
    }
  }

  return answer;
}
