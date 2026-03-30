function solution(s) {
  var arr = [
    ["zero", 0],
    ["one", 1],
    ["two", 2],
    ["three", 3],
    ["four", 4],
    ["five", 5],
    ["six", 6],
    ["seven", 7],
    ["eight", 8],
    ["nine", 9],
  ];

  const result = [];
  var tmp = [];
  for (var i = 0; i < s.length; i++) {
    var asc = s[i].charCodeAt();

    if (asc >= 48 && asc <= 57) {
      if (tmp.length === 0) result.push(Number(s[i]));
      else result.push(Number(s[i]));
    } else {
      tmp.push(s[i]);
      var target = arr.find((v) => v[0] === tmp.join(""));
      if (target !== undefined) {
        result.push(target[1]);
        tmp = [];
      }
    }
  }

  return Number(result.join(""));
}
