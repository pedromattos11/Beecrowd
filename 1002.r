var_Raio <- as.numeric(readline("Digite o valor do raio: "))

var_Area <- pi * var_Raio^2

# Imprimir o resultado com 4 casas decimais
cat("A=", formatC(var_Area, format = "f", digits = 4), "\n")