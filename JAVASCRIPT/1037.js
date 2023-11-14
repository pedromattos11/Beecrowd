var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const CONST_NUM1 = lines.shift();

if(CONST_NUM1 > 100 || CONST_NUM1 < 0){
    console.log("Fora de intervalo");
}else if(CONST_NUM1 <= 25){
    console.log("Intervalo [0,25]")
}else if(CONST_NUM1 <= 50){
    console.log("Intervalo (25,50]")
}else if(CONST_NUM1 <= 75){
    console.log("Intervalo (50,75]")
}else if(CONST_NUM1 <= 100){
    console.log("Intervalo (75,100]")
}