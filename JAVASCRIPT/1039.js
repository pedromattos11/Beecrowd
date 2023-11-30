const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const [r1, x1, y1, r2, x2, y2] = line.split(' ').map(Number);
  const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  if (r1 >= d + r2) {
    console.log('RICO');
  } else {
    console.log('MORTO');
  }
});