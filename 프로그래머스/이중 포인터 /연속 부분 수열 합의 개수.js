function solution(elements) {
  var answer = new Set(elements);
  var maxSize = elements.length;
  for (var i = 0; i < maxSize; i++) {
    var sum = elements[i];
    for (var j = i + 1; j < i + maxSize; j++) {
      if (j >= maxSize) {
        sum += elements[j - maxSize];
        answer.add(sum);
      } else {
        sum += elements[j];
        answer.add(sum);
      }
    }
  }
  // console.log([...answer].sort((a,b)=>a-b))
  return answer.size;
}
