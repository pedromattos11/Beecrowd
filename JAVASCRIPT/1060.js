var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n');
var var_Aux=0, var_Aux2=0;

while(var_Aux < lines.length){
    if(lines[var_Aux] > 0){
    var_Aux2++;
    }
    var_Aux++;
}

console.log(var_Aux2 + " valores positivos");