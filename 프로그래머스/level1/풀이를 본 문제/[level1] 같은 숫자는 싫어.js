function solution(arr) {
  let answer = [];
  // arr의 인덱스를 넘어가는 값은 undefined로 맨 마지막 숫자를 반환해준다.
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}
