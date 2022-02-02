function solution(n) {
  var answer = [];

  n = n.toString();

  for (let i = 0; i < n.length; i++) {
    answer.push(parseInt(n[i]));
  }
  answer = answer.reverse();
  return answer;
}
