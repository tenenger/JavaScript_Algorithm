function solution(n) {
  const su = "수";
  const bak = "박";
  let answer = "";
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 == 1) {
      answer += su;
    } else {
      answer += bak;
    }
  }
  return answer;
}
