function solution(nums) {
  const set = new Set(nums);
  const max = nums.length / 2;
  const answer = Math.min(set.size, max);

  return answer;
}
