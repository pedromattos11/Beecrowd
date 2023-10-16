var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [var_HoraInicial, var_MinutoInicial, var_HoraFinal, var_MinutoFinal] = lines.shift().split(" ").map(Number);
let var_Horas, var_Minutos; // Resultado

if(var_HoraInicial === var_HoraFinal && var_MinutoInicial === var_MinutoFinal){
    var_Horas = 24; // 1o Caso
    var_Minutos = 0; // 1o Caso
    // -----------------------------------------------------------
} else if(var_HoraFinal > var_HoraInicial && var_MinutoFinal >= var_MinutoInicial){
    var_Horas = var_HoraFinal - var_HoraInicial; // 2o Caso
    var_Minutos = var_MinutoFinal - var_MinutoInicial; // 2o Caso
    // -----------------------------------------------------------
} else if(var_HoraFinal > var_HoraInicial && var_MinutoInicial > var_MinutoFinal){
    var_Horas = (var_HoraFinal - var_HoraInicial) - 1; // 3o Caso
    var_Minutos = 60 - (var_MinutoInicial - var_MinutoFinal); // 3o Caso
    // -----------------------------------------------------------
} else if(var_HoraInicial > var_HoraFinal && var_MinutoInicial === var_MinutoFinal){
    var_Horas = (var_HoraFinal - var_HoraInicial) + 24; // 4o Caso
    var_Minutos = var_MinutoInicial - var_MinutoFinal; // 4o Caso
    // -----------------------------------------------------------
} else if(var_HoraInicial > var_HoraFinal && var_MinutoInicial > var_MinutoFinal){
    var_Horas = (var_HoraFinal - var_HoraInicial) + 23; // 5o Caso
    var_Minutos = 60 - (var_MinutoInicial - var_MinutoFinal); // 5o Caso
    // -----------------------------------------------------------
} else if(var_HoraInicial > var_HoraFinal && var_MinutoInicial < var_MinutoFinal){
    var_Horas = (var_HoraFinal - var_HoraInicial) + 24; // 6o Caso
    var_Minutos = var_MinutoFinal - var_MinutoInicial; // 6o Caso
    // -----------------------------------------------------------
}else if (var_HoraInicial === var_HoraFinal && var_MinutoFinal > var_MinutoInicial){
    var_Horas = 0; // 7o Caso
    var_Minutos = var_MinutoFinal - var_MinutoInicial; // 7o Caso
    // -----------------------------------------------------------
}else if (var_HoraInicial === var_HoraFinal && var_MinutoFinal < var_MinutoInicial){
    var_Horas = 23; // 8o Caso
    var_Minutos = 60 - (var_MinutoInicial - var_MinutoFinal); // 8o Caso
    // -----------------------------------------------------------
}

console.log("O JOGO DUROU " + var_Horas + " HORA(S) E " + var_Minutos + " MINUTO(S)" );