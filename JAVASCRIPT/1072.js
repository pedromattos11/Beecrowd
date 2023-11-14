var var_input = require('fs').readFileSync('stdin', 'utf8');
var var_lines = var_input.split('\n');

var var_n = parseInt(var_lines[0]);
var var_inside = 0;
var var_outside = 0;

for (var var_i = 1; var_i <= var_n; var_i++) {
  var var_x = parseInt(var_lines[var_i]);
  if (10 <= var_x && var_x <= 20) {
    var_inside++;
  } else {
    var_outside++;
  }
}

console.log(var_inside + ' in');
console.log(var_outside + ' out');