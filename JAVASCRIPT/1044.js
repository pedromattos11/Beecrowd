var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var array_Num = [var_Num1, var_Num2] = lines.shift().split(" ").map(item => Number (item));

array_Num.sort((a,b) => b - a);
var var_Modulo = array_Num[0] % array_Num[1];

if(var_Modulo === 0){
    console.log("Sao Multiplos")
}else{
    console.log("Nao sao Multiplos")
}