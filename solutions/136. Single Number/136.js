var singleNumber = function (nums) {
  const obj = {};
  nums.forEach((num) => {
    if (obj[num]) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  });
  for (const key in obj) {
    if (obj[key] === 1) return key;
  }
};
