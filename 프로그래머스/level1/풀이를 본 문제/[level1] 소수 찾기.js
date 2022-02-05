function solution(n) {
  const numbers = new Array(n + 1).fill(true);
  numbers[0] = false;
  numbers[1] = false;

  for (let i = 2; i <= n; i++) {
    if (numbers[i] === true) {
      for (let j = 2; j <= n / i; j++) {
        numbers[i * j] = false;
      }
    }
  }

  let answer = numbers.filter((element) => element === true).length;
  return answer;
}
