const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let m, n;

rl.on('line', (line) => {
  [m, n] = line.split(' ').map(Number);

  if (m <= 0 || n <= 0) {
    return;
  }

  console.log(`Sequência de ${m} até ${n}: ${[m, ...Array(n - m + 1).keys()].join(', ')}`);
  console.log(`Soma: ${(m + n) * Math.floor((n - m) / 2)}`);
});
