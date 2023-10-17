var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

const CONST = lines.shift();
let var_Cont=0;

while (var_Cont <= CONST){
    if(var_Cont % 2 !== 1){
    var_Cont++
    console.log(var_Cont);
    }else{
        var_Cont++
    }
}