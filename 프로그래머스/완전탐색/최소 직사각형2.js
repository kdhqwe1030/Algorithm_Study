function solution(sizes) {
  var answer = 0;
  var wmax = sizes[0][0];
  var hmax = sizes[0][1];

  for (var i = 1; i < sizes.length; i++) {
    const w = sizes[i][0]; //가로
    const h = sizes[i][1]; //세로

    if (wmax > w && hmax > h) continue;
    else {
      const w1 = Math.max(w, wmax);
      const h1 = Math.max(h, hmax);
      const w2 = Math.max(h, wmax);
      const h2 = Math.max(w, hmax);
      if (w1 * h1 > w2 * h2) {
        wmax = w2;
        hmax = h2;
      } else {
        wmax = w1;
        hmax = h1;
      }
    }
  }
  answer = wmax * hmax;
  return answer;
}
