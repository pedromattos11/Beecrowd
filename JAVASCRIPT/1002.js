var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const const_Pi = 3.14159
let var_Raio = lines.shift();
let var_Area = const_Pi * (var_Raio * var_Raio);
console.log("A="+ var_Area.toFixed(4));