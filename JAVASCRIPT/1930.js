var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var[var_T1, var_T2, var_T3, var_T4] = lines.shift().split(" ").map(item => Number (item));
var var_Soma = (var_T1 - 1) + (var_T2 - 1) + (var_T3 - 1) + var_T4;
console.log(var_Soma);