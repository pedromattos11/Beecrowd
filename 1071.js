var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let X = Number(lines[0]); 
let Y = Number(lines[1]); // Ler Números

let somaImpares = 0;

if (X > Y) {
    let temp = X;
    X = Y;
    Y = temp;
}

for (let i = X; i <= Y; i++) {
    if (i % 2 !== 0) {
        somaImpares += i;
    }
}

console.log(somaImpares);