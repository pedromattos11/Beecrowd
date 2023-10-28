package main

import "fmt"

func main() {
    var raio float64
    fmt.Scan(&raio)

    pi := 3.14159
    area := pi * raio * raio

    fmt.Printf("A=%.4f\n", area)
}