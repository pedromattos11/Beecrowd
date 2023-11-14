var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let var_Num1 = parseInt(lines.shift());
let var_Num2 = parseInt(lines.shift());
let var_Soma = (var_Num1 + var_Num2);

console.log("SOMA = "+ var_Soma);