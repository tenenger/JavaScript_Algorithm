function solution(s) {
  let answer = true;
  let s_length = s.length;
  const length_check = s_length === 4 || s_length === 6;
  const number_check = s == parseInt(s);
  if (length_check && number_check) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
