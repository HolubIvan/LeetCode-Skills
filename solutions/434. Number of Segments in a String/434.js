var countSegments = function (s) {
  if (!s.length) return 0;
  let len = 0;
  const word = s.split(" ");
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== "") {
      len += 1;
    }
  }
  return len;
};
