function solution(array, commands) {
  var answer = [];

  for (const command of commands) {
    const [i, j, k] = command;
    const newArray = array.slice(i - 1, j);
    newArray.sort((a, b) => a - b);
    answer.push(newArray[k - 1]);
  }

  return answer;
}
