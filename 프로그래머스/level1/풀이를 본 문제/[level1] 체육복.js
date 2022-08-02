function solution(n, lost, reserve) {
  let answer = 0;
  const students = Array(n).fill(1);

  for (const studentNum of lost) {
    students[studentNum - 1] -= 1;
  }

  for (const studentNum of reserve) {
    students[studentNum - 1] += 1;
  }

  for (let idx = 0; idx < n; idx++) {
    if (students[idx] === 0 && students[idx - 1] > 1) {
      students[idx] += 1;
      students[idx - 1] -= 1;
    }

    if (students[idx] === 0 && students[idx + 1] > 1) {
      students[idx] += 1;
      students[idx + 1] -= 1;
    }
  }

  answer = students.filter((student) => student >= 1).length;

  return answer;
}
