function solution(n) {
  var answer = 0;
  let check = Math.pow(n, 0.5);
  if (Number.isInteger(check)) {
    answer = Math.pow(check + 1, 2);
  } else {
    answer = -1;
  }
  return answer;
}
