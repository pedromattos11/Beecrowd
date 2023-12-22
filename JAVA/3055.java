public class MediaNotas {

  public static int mediaNotas(int nota1, int nota2) {
    return (nota1 + nota2) / 2;
  }

  public static int notaNaoSaber(int nota1, int media) {
    return 2 * media - nota1;
  }

  public static void main(String[] args) {
    int nota1 = Integer.parseInt(System.console().readLine());
    int media = Integer.parseInt(System.console().readLine());
    int nota2 = notaNaoSaber(nota1, media);
    System.out.println(nota2);
  }
}