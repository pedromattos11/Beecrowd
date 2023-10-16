var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var[var_A, var_B, var_C, var_D] = lines.shift().split(" ").map(item => Number (item));
var soma1 = var_C + var_D;
var soma2 = var_A + var_B;

if(var_B > var_C && var_D > var_A && soma1 > soma2 && var_C > 0 && var_D > 0 && var_A % 2 === 0){
    console.log("Valores aceitos");
}else{
    console.log("Valores nao aceitos");
}