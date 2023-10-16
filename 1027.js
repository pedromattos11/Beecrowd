var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const[CONST_A, CONST_B, CONST_C] = lines.shift().split(" ").map(item => Number (item));
var var_Resultado1;
var var_Resultado2;
var var_Auxiliar = CONST_B * CONST_B - 4 * CONST_A * CONST_C;

if(2 * CONST_A === 0 || var_Auxiliar < 0){
    console.log("Impossivel calcular")
}else{

var_Resultado1 = (- CONST_B + Math.sqrt(CONST_B * CONST_B - 4 * CONST_A * CONST_C)) / (2 * CONST_A);
var_Resultado2 = (- CONST_B - Math.sqrt(CONST_B * CONST_B - 4 * CONST_A * CONST_C)) / (2 * CONST_A);

console.log("R1 = " + var_Resultado1.toFixed(5));
console.log("R2 = " + var_Resultado2.toFixed(5));
}