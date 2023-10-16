var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const CONST_DDD = lines.shift();

if(CONST_DDD === "61") {
    console.log("Brasilia"); // Brasilia
}else if(CONST_DDD === "71"){
    console.log("Salvador"); // Salvador
}else if(CONST_DDD === "11"){
    console.log("Sao Paulo"); // Sao Paulo
}else if(CONST_DDD === "21"){
    console.log("Rio de Janeiro"); // Rio de Janeiro
}else if(CONST_DDD === "32"){
    console.log("Juiz de Fora"); // Juiz de Fora
}else if(CONST_DDD === "19"){
    console.log("Campinas"); // Campinas
}else if(CONST_DDD === "27"){
    console.log("Vitoria"); // Vitoria
}else if(CONST_DDD === "31"){
    console.log("Belo Horizonte"); // Belo Horizonte
}else{
    console.log("DDD nao cadastrado");
}