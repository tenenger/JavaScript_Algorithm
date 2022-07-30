function solution(s) {
  const numberToEnglish = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let answer = s;

  for (const el in numberToEnglish) {
    const reg = new RegExp(el, "g");
    answer = answer.replace(reg, numberToEnglish[el]);
  }
  answer = Number(answer);

  return answer;
}
