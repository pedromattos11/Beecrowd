const input = require("fs").readFileSync("stdin", "utf8");
const lines = input.split("\n");

const n = parseInt(lines[0]);

for (let i = 1; i <= n; i++) {
  const values = lines[i].split(" ").map(Number);
  const [a, b, c] = values;
  
  const media = (a * 2 + b * 3 + c * 5) / 10;
  
  console.log(media.toFixed(1));
}