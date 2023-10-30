package main

import "fmt"

func main() {
    var notaA, notaB float64
    pesoA, pesoB := 3.5, 7.5

    fmt.Scan(&notaA)
    fmt.Scan(&notaB)

    media := (notaA*pesoA + notaB*pesoB) / (pesoA + pesoB)

    fmt.Printf("MEDIA = %.5f\n", media)
}