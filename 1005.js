var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let var_Nota1 = parseFloat(lines.shift());
let var_Nota2 = parseFloat(lines.shift());
let var_Media = ((var_Nota1 * 3.5) + (var_Nota2 * 7.5)) / 11;

console.log("MEDIA = " + var_Media.toFixed(5));