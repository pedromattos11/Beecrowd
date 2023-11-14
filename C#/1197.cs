using System;

class Program
{
    static void Main(string[] args)
    {
        st ringinput;
        while ((input = Console.ReadLine()) != null)
        {
            string[] values = input.Split();
            int v = int.Parse(values[0]);
            
            int t = int.Parse(values[1]);

            int displacement = 2 * v * t;

            Console.WriteLine(displacement);
        }
    }
}
