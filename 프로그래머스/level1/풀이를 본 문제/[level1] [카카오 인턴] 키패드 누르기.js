function solution(numbers, hand) {
  const keypadPosition = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let answer = "";
  let leftHandPosition = keypadPosition["*"];
  let rightHandPosition = keypadPosition["#"];

  for (const number of numbers) {
    let leftDistance = 0;
    let rightDistance = 0;

    for (let i = 0; i < 2; i++) {
      leftDistance += Math.abs(leftHandPosition[i] - keypadPosition[number][i]);
      rightDistance += Math.abs(
        rightHandPosition[i] - keypadPosition[number][i]
      );
    }

    if (number === 1 || number === 4 || number === 7) {
      leftHandPosition = keypadPosition[number];
      answer += "L";
    } else if (number === 3 || number === 6 || number === 9) {
      rightHandPosition = keypadPosition[number];
      answer += "R";
    } else if (leftDistance < rightDistance) {
      leftHandPosition = keypadPosition[number];
      answer += "L";
    } else if (leftDistance > rightDistance) {
      rightHandPosition = keypadPosition[number];
      answer += "R";
    } else {
      if (hand === "left") {
        leftHandPosition = keypadPosition[number];
        answer += "L";
      } else {
        rightHandPosition = keypadPosition[number];
        answer += "R";
      }
    }
  }

  return answer;
}
