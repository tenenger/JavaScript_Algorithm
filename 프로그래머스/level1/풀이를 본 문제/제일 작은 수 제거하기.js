function solution(arr) {
  let arr_min = Math.min.apply(null, arr);
  let idx = arr.indexOf(arr_min);
  arr.splice(idx, 1);
  if (arr.length === 0) {
    arr.push(-1);
  }
  return arr;
}
