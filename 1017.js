var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var var_Tempo = parseFloat(lines.shift());
var var_VelocMedia = parseFloat(lines.shift());
var var_Distancia = var_Tempo * var_VelocMedia;
var var_Consumo = var_Distancia / 12;

console.log(var_Consumo.toFixed(3));