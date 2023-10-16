var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var array_Num = [var_Num1, var_Num2, var_Num3] = lines.shift().split(" ").map(item => Number (item));
array_Num.sort((a,b) => a - b); // Comando para organziar variáveis da menor pra maior

if(array_Num[0] + array_Num[1] > array_Num[2]){
    var var_Perimetro = array_Num[0] + array_Num[1] + array_Num[2];
    console.log("Perimetro = " + var_Perimetro.toFixed(1));
}else{
    var var_Area = ((array_Num[2] + array_Num[1]) * array_Num[0]) / 2.0;
    console.log("Area = " + var_Area.toFixed(1));
}