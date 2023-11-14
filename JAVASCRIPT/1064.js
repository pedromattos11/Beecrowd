var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(Number);
var var_Media=0;
var var_Positv=0;

for(var var_Aux=0; var_Aux < lines.length; var_Aux++){
    if(lines[var_Aux] > 0){
        var_Positv = var_Positv + 1;
        var var_Media = var_Media + lines[var_Aux];
    }
}

console.log(var_Positv + " valores positivos");
console.log((var_Media / var_Positv).toFixed(1));