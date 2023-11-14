const { log } = require('console');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [var_A, var_B, var_C] = lines.shift().split(" ").map(Number).sort((a,b) => b - a);

if(var_A >= var_B + var_C){
    console.log("NAO FORMA TRIANGULO"); // 1
}else if(Math.pow(var_A, 2) === Math.pow(var_B, 2) + Math.pow(var_C, 2)){
    console.log("TRIANGULO RETANGULO"); //  
}else if(Math.pow(var_A, 2) > Math.pow(var_B, 2) + Math.pow(var_C, 2)){
    console.log("TRIANGULO OBTUSANGULO");
}else if(Math.pow(var_A, 2) < Math.pow(var_B, 2) + Math.pow(var_C, 2)){
    console.log("TRIANGULO ACUTANGULO");
}

if(var_A === var_B && var_A === var_C){
    console.log("TRIANGULO EQUILATERO");
}else if(var_A === var_B || var_A === var_C || var_B === var_C){
    console.log("TRIANGULO ISOSCELES");
}