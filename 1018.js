var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const CONST_VALOR = lines.shift();

var var_Nota100;
var var_Nota50;
var var_Nota20;
var var_Nota10;
var var_Nota5;
var var_Nota2;
var var_Nota1;
var var_Resto;

var_Nota100 = parseInt(CONST_VALOR / 100);
var_Resto = CONST_VALOR % 100

var_Nota50 = parseInt(var_Resto / 50);
var_Resto = var_Resto % 50

var_Nota20 = parseInt(var_Resto / 20);
var_Resto = var_Resto % 20

var_Nota10 = parseInt(var_Resto / 10);
var_Resto = var_Resto % 10

var_Nota5 = parseInt(var_Resto / 5);
var_Resto = var_Resto % 5

var_Nota2 = parseInt(var_Resto / 2);
var_Resto = var_Resto % 2

var_Nota1 = parseInt(var_Resto / 1);
var_Resto = var_Resto % 1

console.log(CONST_VALOR);
console.log(var_Nota100 + " nota(s) de R$ 100,00");
console.log(var_Nota50 + " nota(s) de R$ 50,00");
console.log(var_Nota20 + " nota(s) de R$ 20,00");
console.log(var_Nota10 + " nota(s) de R$ 10,00");
console.log(var_Nota5 + " nota(s) de R$ 5,00");
console.log(var_Nota2 + " nota(s) de R$ 2,00");
console.log(var_Nota1 + " nota(s) de R$ 1,00");