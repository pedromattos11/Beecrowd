import java.util.Scanner;
public class BEE1006 {
	public static void main(String[] args) {
        
		Scanner dado = new Scanner(System.in);
		double nota_A, notaB, notaC, media, notaA2, notaB2, notaC2;

		nota_A = dado.nextDouble();
		notaB = dado.nextDouble();
		notaC = dado.nextDouble();
		notaA2 = (nota_A * 20) / 100;
		notaB2 = (notaB * 30) / 100;
		notaC2 = (notaC * 50) / 100;
		media = notaA2 + notaB2 + notaC2;

		System.out.printf("MEDIA = %.1f%n" ,media);
		dado.close();
	}
}