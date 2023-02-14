var maximumWealth = function (accounts) {
  let usersTotalAmount = [];
  accounts.forEach((account) => {
    let total = 0;
    for (let i = 0; i < account.length; i++) {
      total += account[i];
    }
    usersTotalAmount.push(total);
  });
  return Math.max(...usersTotalAmount);
};
