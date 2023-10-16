var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function tabuada(N) {
    for (let i = 1; i <= 10; i++) {
        const resultado = i * N;
        console.log(`${i} x ${N} = ${resultado}`);
    }
}

const N = parseInt(lines[0]);

if (N > 2 && N < 1000) {
    tabuada(N);
} else {
    console.log('Valor fora da faixa permitida.');
}
