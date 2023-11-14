var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [var_Inicio, var_Final] = lines.shift().split(" ").map(Number);
let var_Resultado;

if(var_Inicio > var_Final){
    var_Resultado = 24 - (var_Inicio - var_Final);
}else if(var_Final === var_Inicio){
    var_Resultado = 24;
}else if(var_Final > var_Inicio){
    var_Resultado = Math.abs(var_Inicio - var_Final);
}

console.log("O JOGO DUROU " + var_Resultado + " HORA(S)")