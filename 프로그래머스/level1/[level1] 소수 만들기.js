function primeNumber(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(nums) {
  let answer = 0;

  function DFS(level, start, sum) {
    if (level === 3) {
      if (primeNumber(sum)) answer += 1;
    } else {
      for (let i = start; i < nums.length; i++) {
        DFS(level + 1, i + 1, sum + nums[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}
