var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var var_Salario = lines.shift();
var var_Imposto;

if(var_Salario <= 2000){ // Cond 1
    console.log("Isento") 
}else if(var_Salario <= 3000){ // Cond 2
    var_Salario = var_Salario - 2000;
    var_Imposto = var_Salario * 0.08;
    console.log("R$ " + var_Imposto.toFixed(2));
}else if(var_Salario <= 4500){ // Cond 3
    var_Salario = var_Salario - 3000;
    var_Imposto = 1000 * 0.08;
    var_Imposto = var_Imposto + var_Salario * 0.18;
    console.log("R$ " + var_Imposto.toFixed(2));
}else{ // Final
    var_Salario = var_Salario - 4500;
    var_Imposto = ((1000 * 0.08) + (1500 * 0.18)) + var_Salario * 0.28;
    console.log("R$ " + var_Imposto.toFixed(2));
}