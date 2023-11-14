var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var[var_Cod, var_Qtde] = lines.shift().split(" ").map(item => Number (item));
var var_Preco;

function SOMAR (var_Cod){
    var x = var_Cod;
}

if(var_Cod === 1){ // Código 1 
    var_Preco = var_Qtde * 4;
    console.log("Total: R$ " + var_Preco.toFixed(2));
}else if(var_Cod === 2){ // Código 2
    var_Preco = var_Qtde * 4.5;
    console.log("Total: R$ " + var_Preco.toFixed(2));
}else if(var_Cod === 3){ // Código 3
    var_Preco = var_Qtde * 5;
    console.log("Total: R$ " + var_Preco.toFixed(2));
}else if(var_Cod === 4){ // Código 4
    var_Preco = var_Qtde * 2;
    console.log("Total: R$ " + var_Preco.toFixed(2));
}else if(var_Cod === 5){ // Código 5
    var_Preco = var_Qtde * 1.5;
    console.log("Total: R$ " + var_Preco.toFixed(2));
}