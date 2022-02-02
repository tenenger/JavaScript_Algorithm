function solution(s) {
  let arr = [];
  let data = s.split(" ");
  for (let i = 0; i < data.length; i++) {
    let answer = "";
    let string = data[i];

    for (let j = 0; j < string.length; j++) {
      if (j % 2 == 0) {
        answer += string[j].toUpperCase();
      } else {
        answer += string[j].toLowerCase();
      }
    }
    arr.push(answer);
  }
  let result = arr.join(" ");
  return result;
}
