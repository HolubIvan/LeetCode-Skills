var missingNumber = function (nums) {
  const sorted = nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < sorted.length; i++) {
    if (i !== sorted[i]) return i;
  }
  return sorted.length;
};
