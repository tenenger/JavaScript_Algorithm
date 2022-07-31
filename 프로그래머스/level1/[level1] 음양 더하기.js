function solution(absolutes, signs) {
  var answer = 0;
  const length = absolutes.length;

  for (let i = 0; i < length; i++) {
    const prefix = signs[i] ? 1 : -1;
    answer += prefix * absolutes[i];
  }

  return answer;
}
