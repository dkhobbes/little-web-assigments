var calc = require('./calculator.js');
var parser = require('.csv-parser.js');

console.log('what is calc?', calc);

var result = calc.add(7,13);
console.log('I added', result);
