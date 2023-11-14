var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var idadeEmDias = lines.shift();

var anos = parseInt(idadeEmDias / 365);
var fracaoDeAnos = idadeEmDias % 365;

var meses = parseInt(fracaoDeAnos / 30);
var fracaoDeMeses = fracaoDeAnos % 30;

var dias = fracaoDeMeses * 1;

console.log(`${anos} ano(s)`);
console.log(`${meses} mes(es)`);
console.log(`${dias} dia(s)`);

// var var_Anos = 0;
// var var_Resto = 0;

// if(CONST_IDADEDIAS >= 365){
//     var_Anos = CONST_IDADEDIAS / 365;
//     var_Resto = CONST_IDADEDIAS % 365;
//     var_Meses = var_Resto / 12;
//     var_Resto = var_Resto % 365;
// }else{
//     var_Anos = 0;
//     var_Meses = CONST_IDADEDIAS / 12;
// }

