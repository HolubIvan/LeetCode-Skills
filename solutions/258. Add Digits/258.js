var addDigits = function (num) {
  if (num === 0) return 0;
  num = String(num);
  let temp = 0;
  for (let i = 0; i < num.length; i++) {
    temp += Number(num[i]);
  }
  if (String(temp).length === 1) return temp;
  return addDigits(temp);
};
