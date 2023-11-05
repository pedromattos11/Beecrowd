using System;

class Program
{
    static void Main(string[] args)
    {
        double pi = 3.14159;
        double raio = double.Parse(Console.ReadLine());
        
        double volume = (4.0 / 3) * pi * Math.Pow(raio, 3);
        
        Console.WriteLine("VOLUME = " + volume.ToString("F3"));
    }
}