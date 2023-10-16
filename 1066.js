var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(Number);

var var_Pares=0;
var var_Impar=0;
var var_Negativo=0;
var var_Positivo=0;
var var_Contadora=0

for(var_Contadora < lines.length; var_Contadora++;){
    while(lines[var_Contadora] % 2 === 0){ // Contagem de números pares
        var_Pares++;
    }
    if(lines[var_Contadora] % 2 === 1){ // Contagem de números impares
        var_Impar++;
    }
    if(lines[var_Contadora] > 0){ // Contagem de números positivos
        var_Positivo++;
    }
}

console.log(var_Pares + " valores pares");
console.log(var_Impar + " valores impares");
console.log(var_Positivo + " valores positivos");
console.log(var_Negativo + " valores negativos");