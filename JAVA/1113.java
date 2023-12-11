import java.util.Scanner;

public class Main {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    while (true) {
      System.out.print("Digite dois números inteiros: ");
      int x = scanner.nextInt();
      int y = scanner.nextInt();

      if (x == y) {
        break;
      }

      System.out.println(x.compareTo(y) < 0 ? "Crescente" : "Decrescente");
    }
  }
}