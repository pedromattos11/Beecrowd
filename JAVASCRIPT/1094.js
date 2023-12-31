var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let totalCasos = 0;
let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

const n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  const [quantidade, tipo] = lines[i].split(' ');
  if (tipo === 'C') totalCoelhos += parseInt(quantidade);
  if (tipo === 'R') totalRatos += parseInt(quantidade);
  if (tipo === 'S') totalSapos += parseInt(quantidade);
  totalCasos++;
}

const totalCobaias = totalCoelhos + totalRatos + totalSapos;
const percentualCoelhos = ((totalCoelhos / totalCobaias) * 100).toFixed(2);
const percentualRatos = ((totalRatos / totalCobaias) * 100).toFixed(2);
const percentualSapos = ((totalSapos / totalCobaias) * 100).toFixed(2);

console.log('Total: ' + totalCobaias + ' cobaias');
console.log('Total de coelhos: ' + totalCoelhos);
console.log('Total de ratos: ' + totalRatos);
console.log('Total de sapos: ' + totalSapos);
console.log('Percentual de coelhos: ' + percentualCoelhos + ' %');
console.log('Percentual de ratos: ' + percentualRatos + ' %');
console.log('Percentual de sapos: ' + percentualSapos + ' %');