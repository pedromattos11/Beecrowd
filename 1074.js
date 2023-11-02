const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const N = parseInt(lines[0]);

for (let i = 1; i <= N; i++) {
  const X = parseInt(lines[i]);

  if (X === 0) {
    console.log('NULL');
  } else if (X % 2 === 0) {
    if (X > 0) {
      console.log('EVEN POSITIVE');
    } else {
      console.log('EVEN NEGATIVE');
    }
  } else {
    if (X > 0) {
      console.log('ODD POSITIVE');
    } else {
      console.log('ODD NEGATIVE');
    }
  }
}