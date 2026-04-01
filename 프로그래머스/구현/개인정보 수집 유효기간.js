function solution(today, terms, privacies) {
  var answer = [];
  var [y, m, d] = today.split(".");
  y = Number(y);
  m = Number(m);
  d = Number(d);

  const typeTerms = new Map();
  for (var i = 0; i < terms.length; i++) {
    const [x, y] = terms[i].split(" ");
    typeTerms.set(x, Number(y));
  }

  for (var i = 0; i < privacies.length; i++) {
    var [day, term] = privacies[i].split(" ");
    var [ny, nm, nd] = day.split(".");
    ny = Number(ny);
    nm = Number(nm);
    nd = Number(nd);

    var period = typeTerms.get(term);

    //달을 더했을 때 12가 넘는 경우
    if (nm + period > 12) {
      nm += period;
      while (nm > 12) {
        nm -= 12;
        ny += 1;
      }
    } else nm += period;

    //하루를 뺏을 때 달이나 년도가 달라지는 경우
    nd -= 1;
    if (nd === 0) {
      if (nm - 1 === 0) {
        ny -= 1;
        nm = 12;
        nd = 28;
      } else {
        nd = 28;
        nm -= 1;
      }
    }

    console.log(
      i,
      "번째: ",
      isExpire(y, m, d, ny, nm, nd),
      y,
      m,
      d,
      "     ",
      ny,
      nm,
      nd,
    );
    if (isExpire(y, m, d, ny, nm, nd)) answer.push(i + 1);
  }

  return answer;
}
function isExpire(y, m, d, ny, nm, nd) {
  if (y < ny) return false;
  else if (y === ny && m < nm) return false;
  else if (y === ny && m === nm && d <= nd) return false;

  return true;
}
