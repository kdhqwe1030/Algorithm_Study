function solution(n) {
  return Number(
    String(n)
      .split("")
      .sort((a, b) => Number(b) - Number(a))
      .join(""),
  );
}
