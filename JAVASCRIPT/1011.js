var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var var_Raio = parseFloat(lines.shift());
const CONST_PI = 3.14159
var var_Volume = (4.0 / 3) * CONST_PI * Math.pow(var_Raio, 3);

console.log("VOLUME = " + var_Volume.toFixed(3));