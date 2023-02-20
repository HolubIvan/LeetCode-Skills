var lengthOfLastWord = function (s) {
  const arr = s.split(" ").filter((el) => el.trim().length > 0);
  return arr[arr.length - 1].length;
};
