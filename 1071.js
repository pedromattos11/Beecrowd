var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [X, Y] = lines[0].split(" ").map(value => parseInt(value));

let somaImpares = 0;

if (X > Y) {
    let temp = X;
    X = Y;
    Y = temp;
}

for (let i = X + 1; i < Y; i++) {
    if (i % 2 !== 0) {
        somaImpares += i;
    }
}

console.log(somaImpares);