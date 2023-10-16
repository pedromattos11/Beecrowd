// código gerado pela AI:

var input = require('fs').readFileSync('/stdin', 'utf8');
var lines = input.split('\n');

var var_Pares = 0;

for (var i = 0; i < 5; i++) {
    var value = parseInt(lines[i]);

    if (value % 2 === 0) {
        var_Pares++;
    }
}

console.log(var_Pares + " valores pares");


/* código que funcionou no vscode mas o beecrowd não aceitou: 


var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r\n').map(Number);
var var_Pares=0;

for(var var_Aux=0; var_Aux < lines.length; var_Aux++){
    if(lines[var_Aux] % 2 === 0){
        var_Pares = var_Pares + 1;
    }
}

console.log(var_Pares + " valores pares"); */