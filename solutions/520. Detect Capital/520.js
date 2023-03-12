var detectCapitalUse = function (word) {
  const v1 = word.toLowerCase();
  const v2 = word.toUpperCase();
  const v3 = word.toLowerCase().split("");
  v3.splice(0, 1, v3[0].toUpperCase());

  if (word === v1 || word === v2 || word === v3.join("")) {
    return true;
  }
  return false;
};
