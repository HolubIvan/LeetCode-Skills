var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  for (const letter of s) {
    t = t.replace(letter, "");
  }
  return t.length === 0;
};
