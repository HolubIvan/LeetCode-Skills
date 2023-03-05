var reverseVowels = function (s) {
  const vowelsConst = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const arr = s.split("");
  const vowels = [];
  let count = 0;
  arr.forEach((el) => {
    if (vowelsConst.includes(el)) {
      vowels.push(el);
    }
  });
  vowels.reverse();
  arr.forEach((el, i) => {
    if (vowelsConst.includes(el)) {
      arr.splice(i, 1, vowels[count]);
      count += 1;
    }
  });
  return arr.join("");
};
