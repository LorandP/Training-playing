const mark = {
  fullName: 'Mark',
  mass: 89,
  height: 2.0,
  calcBMI: function() {
    this.bmi = this.mass / (this.height / this.height);
    return this.bmi;
  }
}

const austin = {
  fullName: 'Austin',
  mass: 77,
  height: 1.94,
  calcBMI: function() {
    this.bmi = this.mass / (this.height / this.height);
    return this.bmi;
  }
}

if (mark.calcBMI() > austin.calcBMI()) {
  console.log(mark.fullName + ' has higher BMI');
} else if (mark.bmi < austin.bmi) {
  console.log(austin.fullName + ' has higher BMI');
} else {
  console.log('They have same BMI')
}

