const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n');

const N =  Number(lines.shift());

for(let var_Aux=1; var_Aux < 10000; var_Aux++){
    if(var_Aux % N === 2){
        console.log(var_Aux);
    }
}