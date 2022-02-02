function solution(x) {
  let answer = true;
  let sum = 0;
  x = x.toString();
  let arr = [];
  for (let i = 0; i < x.length; i++) {
    arr.push(x[i]);
    sum += parseInt(x[i]);
  }
  if (parseInt(x) % sum !== 0) {
    answer = false;
  }
  return answer;
}
