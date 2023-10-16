var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let var_Nota1 = parseFloat(lines.shift());
let var_Nota2 = parseFloat(lines.shift());
let var_Nota3 = parseFloat(lines.shift());
let var_Media = ((var_Nota1 * 2) + (var_Nota2 * 3) + (var_Nota3 * 5)) / 10.0;

console.log("MEDIA = " + var_Media.toFixed(1));