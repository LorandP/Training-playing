var markMass = 78;
var markHeight = 1.80;

var jhonMass = 67;
var jhonHeight = 1.65;

var markBMI = markMass / (markHeight * markHeight);
var jhonBMI = jhonMass / (jhonHeight * jhonHeight);

const isMarkBMIHigher = markBMI > jhonBMI;

console.log('Is Mark\'s BMI higher then Jhon\'s? ', isMarkBMIHigher)
