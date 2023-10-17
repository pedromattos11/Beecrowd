var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

var var_Pares=-1;
var var_Impar=0;
var var_Negativo=0;
var var_Positivo=0;

for(var var_Contadora=0; var_Contadora < lines.length; var_Contadora++){
    if(lines[var_Contadora] % 2 === 0){ // Contagem de números pares
        var_Pares++;
    }
    if(lines[var_Contadora] % 2 !== 0){ // Contagem de números impares
        var_Impar++;
    }
    if(lines[var_Contadora] > 0){ // Contagem de números positivos
        var_Positivo++;
    }
    if(lines[var_Contadora] < 0){ // Contagem de números positivos
        var_Negativo++;
    }
}

console.log(var_Pares + " valor(es) par(es)");
console.log(var_Impar + " valor(es) impar(es)");
console.log(var_Positivo + " valor(es) positivo(s)");
console.log(var_Negativo + " valor(es) negativo(s)");