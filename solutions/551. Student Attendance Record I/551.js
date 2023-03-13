var checkRecord = function (s) {
  let late = 0;
  let absent = 0;
  if (s.includes("LLL")) return false;
  const days = s.split("");
  for (let i = 0; i < days.length; i++) {
    const element = days[i];
    if (element === "A") {
      absent += 1;
    }
    if (element === "L" && days[i + 1] !== "L") {
      late = 0;
    } else if (element === "L") {
      late += 1;
    }
  }

  if (absent >= 2 || late >= 3) {
    return false;
  }
  return true;
};
