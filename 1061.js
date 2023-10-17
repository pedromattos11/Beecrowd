var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let [dia1, data1] = lines.shift().split(" ");
let [hora1, min1, seg1] = lines.shift().split(" : ");
let [dia2, data2] = lines.shift().split(" ");
let [hora2, min2, seg2] = lines.shift().split(" : ");

let var_Dias = 0, var_Horas = 0, var_Minutos = 0, var_Segundos = 0;

// Convertendo todos os valores para segundos
let totalSegundos1 = parseInt(seg1) + parseInt(min1) * 60 + parseInt(hora1) * 3600 + parseInt(data1) * 24 * 3600;
let totalSegundos2 = parseInt(seg2) + parseInt(min2) * 60 + parseInt(hora2) * 3600 + parseInt(data2) * 24 * 3600;

let diferencaSegundos = totalSegundos2 - totalSegundos1;

// Calculando dias, horas, minutos e segundos
if (diferencaSegundos >= 86400) {
    var_Dias = Math.floor(diferencaSegundos / 86400);
    diferencaSegundos %= 86400;
}

if (diferencaSegundos >= 3600) {
    var_Horas = Math.floor(diferencaSegundos / 3600);
    diferencaSegundos %= 3600;
}

if (diferencaSegundos >= 60) {
    var_Minutos = Math.floor(diferencaSegundos / 60);
    diferencaSegundos %= 60;
}

var_Segundos = diferencaSegundos;

console.log(var_Dias + " dia(s)");
console.log(var_Horas + " hora(s)");
console.log(var_Minutos + " minuto(s)");
console.log(var_Segundos + " segundo(s)");


/*var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');

let [dia1, data1] = lines.shift().split(" ");
let [hora1, min1, seg1] = lines.shift().split(" : ");
let [dia2, data2] = lines.shift().split(" ");
let [hora2, min2, seg2] = lines.shift().split(" : ");

let var_Dias=0, var_Horas=0, var_Minutos=0, var_Segundos=0;

console.log(var_Dias + " dia(s)")
console.log(var_Horas + " hora(s)")
console.log(var_Minutos + " minuto(s)")
console.log(var_Segundos + " segundo(s)") */