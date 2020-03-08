var dan = {
  fullName: 'Dan',
  bills: [222, 32, 122],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];
      if (bill < 50) {
        percentage = .2;
      } else if (bill >= 50 && bill < 200) {
        percentage = .15;
      } else {
        percentage = .1;
      }

      this.tips[i] = bill * percentage;
      this.finalValues[i] = bill + bill + percentage;
    }
  }
}

dan.calcTips();
console.log(dan)