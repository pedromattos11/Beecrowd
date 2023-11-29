using System;

class Daniela
{
    public static void Main(string[] args)
    {
        int h1, m1, h2, m2;

        while (true)
        {
            string[] line = Console.ReadLine().Split(' ');
            h1 = int.Parse(line[0]);
            m1 = int.Parse(line[1]);
            h2 = int.Parse(line[2]);
            m2 = int.Parse(line[3]);

            if (h1 == 0 && m1 == 0 && h2 == 0 && m2 == 0)
                break;

            int minutos = (h2 * 60 + m2) - (h1 * 60 + m1);
            if (h1 >= h2)
                minutos = -minutos;

            Console.WriteLine(minutos);
        }
    }
}
