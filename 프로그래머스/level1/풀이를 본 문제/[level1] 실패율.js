function solution(N, userStages) {
  let result = [];
  let answer = [];

  for (let stage = 1; stage <= N; stage++) {
    let reachNum = userStages.filter((userStage) => userStage >= stage).length;
    let stayNum = userStages.filter((userStage) => userStage === stage).length;
    result.push([stage, stayNum / reachNum]);
  }
  result.sort((a, b) => b[1] - a[1]);
  answer = result.map(([rank, percent]) => rank);

  return answer;
}
