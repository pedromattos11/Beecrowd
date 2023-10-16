var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var pecas1 = lines[0].split(' ');
var codigoPeca1 = parseInt(pecas1[0]);
var numeroPecas1 = parseInt(pecas1[1]);
var valorUnitario1 = parseFloat(pecas1[2]);

var pecas2 = lines[1].split(' ');
var codigoPeca2 = parseInt(pecas2[0]);
var numeroPecas2 = parseInt(pecas2[1]);
var valorUnitario2 = parseFloat(pecas2[2]);

var totalPagar = numeroPecas1 * valorUnitario1 + numeroPecas2 * valorUnitario2;

console.log("VALOR A PAGAR: R$ " + totalPagar.toFixed(2));