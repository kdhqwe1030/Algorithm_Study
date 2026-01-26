function solution(sizes) {
  var answer = 0;
  var w = sizes[0][0];
  var h = sizes[0][1];
  sizes.forEach((card) => {
    var x = card[0];
    var y = card[1];

    //돌려서 넣기 그냥 넣기
    if ((w >= x && h >= y) || (w >= y && h >= x)) return;
    // 한 쪽만 안들어 가는 경우

    if (Math.max(w, x) * Math.max(h, y) > Math.max(w, y) * Math.max(h, x)) {
      w = Math.max(w, y);
      h = Math.max(h, x);
    } else {
      w = Math.max(w, x);
      h = Math.max(h, y);
    }
  });
  answer = w * h;
  return answer;
}
