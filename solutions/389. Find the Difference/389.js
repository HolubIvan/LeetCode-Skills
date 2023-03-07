var findTheDifference = function (s, t) {
  const arrayS = s.split("");
  const arrayT = t.split("");
  for (let i = 0; i < arrayS.length; i++) {
    for (let j = 0; j < arrayT.length; j++) {
      if (arrayS[i] === arrayT[j]) {
        arrayT.splice(j, 1);
        break;
      }
    }
  }
  return arrayT[0];
};
