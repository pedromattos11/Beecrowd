var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var[var_X, var_Y] = lines.shift().split(" ").map(item => Number (item));

if(var_X === 0 & var_Y === 0){
    console.log("Origem")
}else if(var_X > 0 & var_Y > 0){
    console.log("Q1")
}else if(var_X < 0 & var_Y > 0){
    console.log("Q2")
}else if(var_X < 0 & var_Y < 0){
    console.log("Q3")
}else if (var_X > 0 & var_Y < 0){
    console.log("Q4")
} else if(var_X === 0 && var_Y !== 0){
    console.log("Eixo Y");
} else if(var_Y === 0 && var_X !== 0){
    console.log("Eixo X");
}