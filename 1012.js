var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var [A, B, C] = lines[0].split(' ').map(parseFloat);
const CONST_PI = 3.14159;

var var_Triangulo = (A * C) / 2;
var var_Circulo = CONST_PI * Math.pow(C, 2);
var var_Trapezio = ((A + B) * C) / 2;
var var_Quadrado = Math.pow(B, 2);
var var_Retangulo = A * B;

console.log("TRIANGULO: " + var_Triangulo.toFixed(3));
console.log("CIRCULO: " + var_Circulo.toFixed(3));
console.log("TRAPEZIO: " + var_Trapezio.toFixed(3));
console.log("QUADRADO: " + var_Quadrado.toFixed(3));
console.log("RETANGULO: " + var_Retangulo.toFixed(3));