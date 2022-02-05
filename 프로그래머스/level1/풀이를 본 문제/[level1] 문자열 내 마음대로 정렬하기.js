function solution(strings, n) {
  strings.sort((a, b) => {
    let first = a[n];
    let second = b[n];

    if (first === second) {
      return (a > b) - (a < b);
    } else {
      return (first > second) - (first < second);
    }
    // return값이 1이라면 sort인수로 받은 a가 1 b는 0이되어 [b,a]로 정렬된다.
    // return값이 -1이라면 sort인수로 받은 a가 -1 b는 0이되어 [a,b]로 정렬된다.
  });
  return strings;
}
