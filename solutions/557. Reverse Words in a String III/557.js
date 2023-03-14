var reverseWords = function (s) {
  const result = [];
  s.split(" ").forEach((el) => {
    const reversed = el.split("").reverse().join("");
    result.push(reversed);
  });
  return result.join(" ");
};
