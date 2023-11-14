var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let var_Salario = parseFloat(lines.shift());
var var_Ajuste;
var var_Percentual; 

if(var_Salario > 0 && var_Salario <= 400){
    var_Ajuste = var_Salario * 0.15;
    var_Salario = var_Salario + var_Ajuste;
    var_Percentual = "15"
}else if (var_Salario > 400 && var_Salario <= 800){
    var_Ajuste = var_Salario * 0.12;
    var_Salario = var_Salario + var_Ajuste;
    var_Percentual = "12"
}else if (var_Salario > 800 && var_Salario <= 1200){
    var_Ajuste = var_Salario * 0.1;
    var_Salario = var_Salario + var_Ajuste;
    var_Percentual = "10"
}else if(var_Salario > 1200 && var_Salario <= 2000){
    var_Ajuste = var_Salario * 0.07;
    var_Salario = var_Salario + var_Ajuste;
    var_Percentual = "7"
}else if(var_Salario > 2000){
    var_Ajuste = var_Salario * 0.04;
    var_Salario = var_Salario + var_Ajuste;
    var_Percentual = "4"
}

console.log("Novo salario: " + var_Salario.toFixed(2));
console.log("Reajuste ganho: "+ var_Ajuste.toFixed(2));
console.log("Em percentual: " + var_Percentual + " " + "%");