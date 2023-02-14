var numberOfSteps = function (num) {
  let steps = 0;
  let final = num;
  while (final !== 0) {
    if (final % 2 === 0) {
      final = final / 2;
      steps += 1;
    } else {
      final -= 1;
      steps += 1;
    }
  }
  return steps;
};

console.log(numberOfSteps(14));
