var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const CONST_SEGUNDOS = lines.shift(); // Usuário inputando o valor

var var_Horas = Math.floor(CONST_SEGUNDOS / 3600);
var var_Minutos = Math.floor((CONST_SEGUNDOS % 3600) / 60);
var var_SegundosRestantes = CONST_SEGUNDOS % 60;

console.log(var_Horas + ':' + var_Minutos + ':' + var_SegundosRestantes);


/*
const CONST_SEGUNDOS = lines.shift(); // Usuário inputando o valor

var var_Horas;
var var_Minutos;
var var_Segundos;

if(CONST_SEGUNDOS < 60){
    console.log("0:0:" + CONST_SEGUNDOS);
}else if(CONST_SEGUNDOS < 3600){
    var_Minutos = CONST_SEGUNDOS / 60;
    var_Segundos =
    console.log("0:")
} */