var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var var_Id = parseInt(lines.shift());
var var_Horas = parseInt(lines.shift());
var var_SalarioHoras = parseFloat(lines.shift());

var var_SalarioTotal = var_Horas * var_SalarioHoras;

console.log("NUMBER = " + var_Id);
console.log("SALARY = U$ " + var_SalarioTotal.toFixed(2));