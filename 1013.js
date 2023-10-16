var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var[var_Num1, var_Num2, var_Num3] = lines.shift().split(" ").map(item => Number (item));

if(var_Num1 > var_Num2 && var_Num1 > var_Num3){
    console.log(var_Num1 + " eh o maior");
}else if(var_Num2 > var_Num3){
    console.log(var_Num2 + " eh o maior");
}else{
    console.log(var_Num3 + " eh o maior");}

/*if(var_Num1 > var_NumMaior){
   var_NumMaior = var_Num1; 
}

ideia do john
*/