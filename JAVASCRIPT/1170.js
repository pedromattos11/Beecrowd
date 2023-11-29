const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o número de casos de teste: ', (n) => {
  const cases = parseInt(n);

  for (let i = 0; i < cases; i++) {
    rl.question('Digite a capacidade inicial de suprimento de comida (em Kg): ', (c) => {
      const quantity = parseFloat(c);

      let days = 0;
      while (quantity >= 1) {
        quantity /= 2;
        days++;
      }

      console.log(`${days} dias`);
    });
  }

  rl.close();
});