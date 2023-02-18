var isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }
  let result = [];
  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    switch (element) {
      case "(":
        result.push(")");
        break;
      case "{":
        result.push("}");
        break;
      case "[":
        result.push("]");
        break;
      default:
        if (element !== result.pop()) return false;
    }
  }
  return result.length === 0;
};
