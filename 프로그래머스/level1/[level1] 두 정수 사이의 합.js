function solution(a, b) {
  let answer = 0;
  const min_num = Math.min(a, b);
  const max_num = Math.max(a, b);
  for (let i = min_num; i < max_num + 1; i++) {
    answer += i;
  }
  return answer;
}
