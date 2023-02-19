var searchInsert = function (nums, target) {
  if (nums.indexOf(target) === -1) {
    for (let i = 0; i < nums.length; i++) {
      const curr = nums[i];
      const next = nums[i + 1];
      switch (true) {
        case target < curr:
          return 0;
        case target > curr && target < next:
          return nums.indexOf(next);
        case target > nums[nums.length - 1]:
          return nums.length;
      }
    }
  }
  return nums.indexOf(target);
};
