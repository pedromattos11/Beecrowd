var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let var_Nome = lines.shift();
let var_SalarioFixo = parseFloat(lines.shift());
let var_VendasMes = parseFloat(lines.shift());
let var_Comissao = var_VendasMes * 0.15;
let var_SalarioTotal = var_SalarioFixo + var_Comissao;

console.log("TOTAL = R$ " + var_SalarioTotal.toFixed(2));