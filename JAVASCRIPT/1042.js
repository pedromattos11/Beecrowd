var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var array_num = [var_Num1, var_Num2, var_Num3] = lines.shift().split(" ").map(item => Number (item));
array_num.sort((a,b) => a - b); 

for (let var_Aux of array_num) {
    console.log(var_Aux);
}

/*if(var_Num1 > var_Num2 & var_Num1 > var_Num3 & var_Num2 > var_Num3){ //1,2,3
    console.log(var_Num1);
    console.log(var_Num2);
    console.log(var_Num3);
}else if(var_Num2 > var_Num1 & var_Num2 > var_Num3 & var_Num1 > var_Num3){ //2,1,3 
    console.log(var_Num2);
    console.log(var_Num1);
    console.log(var_Num3);
}else if(var_Num1 > var_Num2 & var_Num1 > var_Num3 & var_Num3 > var_Num2){ //1,3,2
    console.log(var_Num1);
    console.log(var_Num3);
    console.log(var_Num2);
}else if(var_Num2 > var_Num1 & var_Num2 > var_Num3 & var_Num3 > var_Num1){ //2,3,1 
    console.log(var_Num2);
    console.log(var_Num3);
    console.log(var_Num1);
}else if(var_Num3 > var_Num1 & var_Num3 > var_Num2 & var_Num1 > var_Num2){// 3,1,2  
    console.log(var_Num3);
    console.log(var_Num1);
    console.log(var_Num2);
}else if(var_Num3 > var_Num1 & var_Num3 > var_Num2 & var_Num2 > var_Num1){ //3,2,1
    console.log(var_Num3);
    console.log(var_Num2);
    console.log(var_Num1);
} */

console.log("");
console.log(var_Num1);
console.log(var_Num2);
console.log(var_Num3);