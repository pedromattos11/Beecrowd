using System;

class Program
{
    static void Main(string[] args)
    {
        string[] entrada1 = Console.ReadLine().Split(' ');
        int codigo1 = int.Parse(entrada1[0]);
        int quantidade1 = int.Parse(entrada1[1]);
        double valor1 = double.Parse(entrada1[2]);

        string[] entrada2 = Console.ReadLine().Split(' ');
        int codigo2 = int.Parse(entrada2[0]);
        int quantidade2 = int.Parse(entrada2[1]);
        double valor2 = double.Parse(entrada2[2]);

        double total = (quantidade1 * valor1) + (quantidade2 * valor2);

        Console.WriteLine("VALOR A PAGAR: R$ " + total.ToString("F2"));
    }
}