using System;

class Program
{
    static void Main(string[] args)
    {
        int numeroFuncionario, horasTrabalhadas;
        double salarioHora, salario;

        numeroFuncionario = int.Parse(Console.ReadLine());
        horasTrabalhadas = int.Parse(Console.ReadLine());
        salarioHora = double.Parse(Console.ReadLine());

        salario = horasTrabalhadas * salarioHora;

        Console.WriteLine("NUMBER = " + numeroFuncionario);
        Console.WriteLine("SALARY = U$ " + salario.ToString("F2"));
    }
}