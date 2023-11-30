const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let m, n;

rl.on('line', (line) => {
  [m, n] = line.split(' ').map(Number);

  const arr = Array(Math.max(n - m + 1, 1));

  console.log(`Sequência de ${m} até ${n}: ${arr.join(', ')}`);
  console.log(`Soma: ${(m + n) * Math.floor((n - m) / 2)}`);
});
