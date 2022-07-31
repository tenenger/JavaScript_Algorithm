function solution(numbers) {
  const ch = Array(10).fill(false);
  let answer = 0;

  for (const number of numbers) {
    ch[number] = true;
  }

  for (let i = 0; i < ch.length; i++) {
    if (ch[i] === false) answer += i;
  }

  return answer;
}
