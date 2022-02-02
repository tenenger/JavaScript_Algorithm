function solution(n, m) {
  var answer = [];
  let arr = [];
  for (let i = 1; i < Math.min(n, m) + 1; i++) {
    if (n % i === 0 && m % i === 0) {
      arr.push(i);
    }
  }
  const max_divisor = Math.max.apply(null, arr);
  answer.push(max_divisor);
  const min_multi = max_divisor * (n / max_divisor) * (m / max_divisor);
  answer.push(min_multi);
  return answer;
}
