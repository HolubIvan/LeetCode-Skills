var majorityElement = function (nums) {
  let num = 0;
  const obj = {};
  nums.forEach((num) => {
    if (obj[num]) {
      obj[num] = obj[num] + 1;
    } else {
      obj[num] = 1;
    }
  });
  for (const iterator in obj) {
    if (obj[iterator] > num) {
      num = obj[iterator];
    }
  }
  return Number(Object.keys(obj).find((key) => obj[key] === Number(num)));
};
