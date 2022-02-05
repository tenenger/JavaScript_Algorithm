function solution(arr, divisor) {
  let answer = [];
  answer = arr.filter((element) => {
    if (element % divisor === 0) {
      return 1;
    } else {
      return 0;
    }
  });
  if (answer.length === 0) {
    // 빈배열을 확인하는 방법
    // 1. 배열길이가 0인지 확인
    answer.push(-1);
  } else {
    answer.sort((a, b) => {
      return a - b;
    });
  }
  return answer;
}
