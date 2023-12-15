def media_notas(nota_1, nota_2):
  return (nota_1 + nota_2) / 2


def nota_nao_saber(nota_1, media):
  return 2 * media - nota_1


def main():
  nota_1 = int(input())
  media = int(input())
  nota_2 = nota_nao_saber(nota_1, media)
  print(nota_2)


if __name__ == "__main__":
  main()
