var findWords = function (words) {
  let result = [];
  const row1 = "qwertyuiop".split("");
  const row2 = "asdfghjkl".split("");
  const row3 = "zxcvbnm".split("");
  for (let i = 0; i < words.length; i++) {
    const valueToCheck = words[i];
    const element = words[i].toLowerCase().split("");
    const value1 = element.every((el) => row1.includes(el));
    const value2 = element.every((el) => row2.includes(el));
    const value3 = element.every((el) => row3.includes(el));
    if (value1 || value2 || value3) {
      result.push(valueToCheck);
    }
  }
  return result;
};
