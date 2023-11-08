nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))

peso1 = 3.5
peso2 = 7.5


media_ponderada = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2)

print(f"A média ponderada é: {media_ponderada:.5f}")