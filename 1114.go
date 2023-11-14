package main

import "fmt"

func main() {
    senhaCorreta := 2002
    var senha int

    for {
        _, err := fmt.Scanf("%d", &senha)
        if err != nil {
            break
        }

        if senha == senhaCorreta {
            fmt.Println("Acesso Permitido")
            break
        } else {
            fmt.Println("Senha Invalida")
        }
    }
}
