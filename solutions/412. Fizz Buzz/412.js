var fizzBuzz = function (n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    switch (true) {
      case Number.isInteger(i / 3) && Number.isInteger(i / 5):
        result.push("FizzBuzz");
        break;
      case Number.isInteger(i / 3):
        result.push("Fizz");
        break;
      case Number.isInteger(i / 5):
        result.push("Buzz");
        break;
      default:
        result.push(`${i}`);
        break;
    }
  }
  return result;
};
