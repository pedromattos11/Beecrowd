var_Raio <- as.numeric(readline("Digite o valor do raio: "))

var_Area <- pi * var_Raio^2

cat("A=", formatC(var_Area, format = "f", digits = 4), "\n")