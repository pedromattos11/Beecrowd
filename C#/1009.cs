using System;

class Program
{
    static void Main(string[] args)
    {
        string nome;
        double salarioFixo, totalVendas, comissao, salarioTotal;
        
        nome = Console.ReadLine();
        salarioFixo = double.Parse(Console.ReadLine());
        totalVendas = double.Parse(Console.ReadLine());

        comissao = totalVendas * 0.15;
        salarioTotal = salarioFixo + comissao;

        Console.WriteLine("TOTAL = R$ " + salarioTotal.ToString("F2"));
    }
}