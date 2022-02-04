function solution(s) {
  var answer = true;
  const change_s = s.toLowerCase();
  let p_cnt = 0,
    y_cnt = 0;

  for (let i of change_s) {
    if (i === "p") {
      p_cnt += 1;
    } else if (i === "y") {
      y_cnt += 1;
    }
  }
  if (p_cnt === y_cnt) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
