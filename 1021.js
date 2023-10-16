var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var var_ValorInput = lines.shift();

var var_Nota100;
var var_Nota50;
var var_Nota20;
var var_Nota10;
var var_Nota5;
var var_Nota2;
var var_Moeda1;
var var_Moeda50;
var var_Moeda025;
var var_Moeda010;
var var_Moeda005;
var var_Moeda001;
var var_Resto;

var_Nota100 = parseInt((var_ValorInput * 100) / (100 * 100));
var_Resto = (var_ValorInput * 100) % (100 * 100)

var_Nota50 = parseInt(var_Resto / (50 * 100));
var_Resto = var_Resto % (50 * 100)

var_Nota20 = parseInt(var_Resto / (20 * 100));
var_Resto = var_Resto % (20 * 100)

var_Nota10 = parseInt(var_Resto / (10 * 100));
var_Resto = var_Resto % (10 * 100)

var_Nota5 = parseInt(var_Resto / (5 * 100));
var_Resto = var_Resto % (5 * 100)

var_Nota2 = parseInt(var_Resto / (2 * 100));
var_Resto = var_Resto % (2 * 100)

// CENTAVOS ----------------------------------------------

var_Moeda1 = parseInt(var_Resto / (1 * 100));
var_Resto = var_Resto % (1 * 100)

var_Moeda50 = parseInt(var_Resto / (0.5 * 100));
var_Resto = var_Resto % (0.5 * 100)

var_Moeda025 = parseInt(var_Resto / (0.25 * 100));
var_Resto = var_Resto % (0.25 * 100)

var_Moeda010 = parseInt(var_Resto / (0.10 * 100));
var_Resto = var_Resto % (0.10 * 100)

var_Moeda005 = parseInt(var_Resto / (0.05 * 100));
var_Resto = var_Resto % (0.05 * 100)

var_Moeda001 = parseInt(var_Resto / (0.01 * 100));
var_Resto = var_Resto % (0.01 * 100)

console.log("NOTAS:");
console.log(var_Nota100 + " nota(s) de R$ 100.00");
console.log(var_Nota50 + " nota(s) de R$ 50.00");
console.log(var_Nota20 + " nota(s) de R$ 20.00");
console.log(var_Nota10 + " nota(s) de R$ 10.00");
console.log(var_Nota5 + " nota(s) de R$ 5.00");
console.log(var_Nota2 + " nota(s) de R$ 2.00");
console.log("MOEDAS:");
console.log(var_Moeda1 + " moeda(s) de R$ 1.00");
console.log(var_Moeda50 + " moeda(s) de R$ 0.50");
console.log(var_Moeda025 + " moeda(s) de R$ 0.25");
console.log(var_Moeda010 + " moeda(s) de R$ 0.10");
console.log(var_Moeda005 + " moeda(s) de R$ 0.05");
console.log(var_Moeda001 + " moeda(s) de R$ 0.01");