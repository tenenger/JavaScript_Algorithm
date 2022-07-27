function solution(lottos, win_nums) {
  const answer = [];
  const correctCountToRank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  let minCorrect = lottos.filter((num) => win_nums.includes(num)).length;

  const plusCorrect = lottos.filter((num) => num === 0).length;

  answer.push(
    correctCountToRank[minCorrect + plusCorrect],
    correctCountToRank[minCorrect]
  );

  return answer;
}
