var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var[var_Nota1, var_Nota2, var_Nota3, var_Nota4] = lines.shift().split(" ").map(item => Number (item));
var_Nota1 = var_Nota1 * 2;
var_Nota2 = var_Nota2 * 3;
var_Nota3 = var_Nota3 * 4;
var_Nota4 = var_Nota4 * 1;
var var_Result = (var_Nota1 + var_Nota2 +var_Nota3 + var_Nota4) / 10;

console.log("Media: " + var_Result.toFixed(1));
if(var_Result < 5){
    console.log("Aluno reprovado.");
} else if(var_Result >= 7){
    console.log("Aluno aprovado.");
} else if(var_Result >= 5 && var_Result <= 6.9){
    console.log("Aluno em exame.");
    var var_Nota5 = parseFloat(lines.shift());
    console.log("Nota do exame: " + var_Nota5.toFixed(1));
    var_Result = (var_Result + var_Nota5) / 2;
    if(var_Result >= 5){
        console.log("Aluno aprovado.");
    }else{
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + var_Result.toFixed(1));
}  