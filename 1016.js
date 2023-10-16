var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var var_Distancia = parseInt(lines.shift());
var var_Tempo = var_Distancia * 2;

console.log(var_Tempo + " minutos")