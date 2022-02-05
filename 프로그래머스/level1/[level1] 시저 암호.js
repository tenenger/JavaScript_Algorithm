function solution(s, n) {
  let result = "";
  console.log("a".charCodeAt());
  for (let i = 0; i < s.length; i++) {
    let check = s.charCodeAt(i);
    if (check === 32) {
      result += " ";
    } else if (check >= 65 && check <= 90) {
      if (check + n >= 91) {
        result += String.fromCharCode(check - 26 + n);
      } else {
        result += String.fromCharCode(check + n);
      }
    } else {
      if (check + n >= 123) {
        result += String.fromCharCode(check - 26 + n);
      } else {
        result += String.fromCharCode(check + n);
      }
    }
  }
  return result;
}
