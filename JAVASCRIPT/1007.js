var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let var_Num1 = parseInt(lines.shift());
let var_Num2 = parseInt(lines.shift());
let var_Num3 = parseInt(lines.shift());
let var_Num4 = parseInt(lines.shift());
let var_Diferenca = (var_Num1 * var_Num2) - (var_Num3 * var_Num4);

console.log("DIFERENCA = " + var_Diferenca);