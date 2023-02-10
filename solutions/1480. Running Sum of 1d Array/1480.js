var runningSum = function (nums) {
  const result = [];
  result[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result[i] = nums[i] + result[i - 1];
  }
  return result;
};

console.log(runningSum([1, 3, 5, 8, 10]));
