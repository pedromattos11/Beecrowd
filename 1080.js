var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let maiorValor = -1;
let posicaoMaiorValor = -1;

for (let i = 0; i < 100; i++) {
  const valor = parseInt(lines[i]);
  
  if (valor > maiorValor) {
    maiorValor = valor;
    posicaoMaiorValor = i + 1;
  }
}

console.log(maiorValor);
console.log(posicaoMaiorValor);