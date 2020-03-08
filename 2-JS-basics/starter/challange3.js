function tipCalculator(bill) {
  var percent;

  if (bill < 50) {
    percent = 0.2;
  } else if (bill >= 50 && bill < 200) {
    percent = 0.15;
  } else if (bill > 200) {
    percent = 0.1;
  }
  return percent * bill;
}

var bills = [223, 23, 124];
var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];

var wholeValues = [bills[0] + tips[0], bills[1] + tips[2], bills[2] + tips[0]];
console.log(wholeValues);
