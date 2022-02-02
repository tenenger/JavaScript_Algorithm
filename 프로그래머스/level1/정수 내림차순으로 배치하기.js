function solution(n) {
  var answer = "";
  n = n.toString();
  let arr = [];
  for (let i = 0; i < n.length; i++) {
    arr.push(n[i]);
  }
  arr.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < n.length; i++) {
    answer += arr[i];
  }
  answer = parseInt(answer);
  return answer;
}
