var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var[var_X1, var_Y1] = lines.shift().split(" ").map(item => Number (item));
var[var_X2, var_Y2] = lines.shift().split(" ").map(item => Number (item));

var var_Distancia = 0;
var_Distancia = Math.sqrt(Math.pow(var_X2 - var_X1,2) + Math.pow(var_Y2 - var_Y1,2));

console.log(var_Distancia.toFixed(4));