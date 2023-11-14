var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(Number);

var var_Cont = lines.shift();
var var_Aux= var_Cont;

while(var_Aux < var_Cont + 12){
    if(var_Aux % 2 !== 0){
        console.log(var_Aux);
    }
    var_Aux++
}
//---------
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var var_Entrada = parseInt(lines.shift());

for(var var_Aux = var_Entrada; var_Aux < (var_Entrada + 12); var_Aux++) {
    if(var_Aux % 2 !== 0) {
        console.log(var_Aux);
    }
}