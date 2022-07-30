function solution(board, moves) {
  let answer = 0;
  const length = board.length;
  const stack = [];

  for (let move of moves) {
    move -= 1;

    for (let i = 0; i < length; i++) {
      if (board[i][move]) {
        stack.push(board[i][move]);
        board[i][move] = 0;
        break;
      }
    }

    while (stack.length >= 2) {
      if (stack[stack.length - 1] !== stack[stack.length - 2]) break;

      stack.pop();
      stack.pop();
      answer += 2;
    }
  }

  return answer;
}
