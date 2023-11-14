var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var var_Distancia = parseInt(lines.shift());
var var_Consumo = parseFloat(lines.shift());
var var_Gasto = var_Distancia / var_Consumo;

console.log(var_Gasto.toFixed(3) + " km/l");