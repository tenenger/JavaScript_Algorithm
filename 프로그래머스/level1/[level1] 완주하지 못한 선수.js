function solution(participants, completion) {
  let answer = "";
  const hash = {};

  for (const person of participants) {
    if (!hash[person]) {
      hash[person] = 1;
    } else {
      hash[person] += 1;
    }
  }

  for (const person of completion) {
    hash[person] -= 1;
  }

  for (const [straggler, num] of Object.entries(hash)) {
    if (num === 1) answer = straggler;
  }

  return answer;
}
