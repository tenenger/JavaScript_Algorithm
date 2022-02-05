function solution(arr) {
  const reducer = (sum, num) => sum + num;
  const answer = arr.reduce(reducer) / arr.length;
  return answer;
}
