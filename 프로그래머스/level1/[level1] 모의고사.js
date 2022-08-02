function solution(answers) {
  const answersLength = answers.length;
  const typeOne = "12345".repeat(Math.ceil(answersLength / 5));
  const typeTwo = "21232425".repeat(Math.ceil(answersLength / 8));
  const typeThree = "3311224455".repeat(Math.ceil(answersLength / 10));
  let maxCount = 0;
  let answer = [];
  let result = [];

  for (const typeAnswers of [typeOne, typeTwo, typeThree]) {
    let count = 0;

    for (let i = 0; i < answersLength; i++) {
      if (answers[i] === parseInt(typeAnswers[i])) count += 1;
    }
    result.push(count);

    if (maxCount < count) maxCount = count;
  }

  result.map((cnt, idx) => {
    if (maxCount === cnt) answer.push(idx + 1);
  });

  return answer;
}
