//Grupo1 
// Critérios:

// - deve ser composta por no mínimo um dígito.
// - deve ser composta por no mínimo um caractere maiúsculo.
// - deve ser composta por no mínimo um caractere minúsculo.
// - deve ser composta por no mínimo um caractere especial.


let senha = "";


function validaSenha(senha){
    
    const digitosNumeros = "0123456789";
    const alfabetoMaiusculo = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const alfabetoMinusculo = 'abcdefghijklmnopqrstuvwxyz';
    const caracteresEspeciais = '!@#$%&*()_-+={[}]|/:;"<>,./?~`'

    let temNumeroNaSenha = 0
    let temMaiusculoNaSenha = 0
    let temMinusculoNaSenha = 0
    let temCaracterEspecial = 0
    
    for(let i = 0; i < digitosNumeros.length; i++){
        for(let j = 0; j < senha.length; j++){
            if(digitosNumeros[i] == senha[j]){
                temNumeroNaSenha += 1
            }          
        }
    }

    for(let mai = 0; mai < alfabetoMaiusculo.length; mai++){        
        for(let usc = 0; usc < senha.length; usc++){
            if(alfabetoMaiusculo[mai] == senha[usc]){
                temMaiusculoNaSenha += 1
            }
        }
    }

    for(let min = 0; min < alfabetoMinusculo.length; min++){        
        for(let ulo = 0; ulo < senha.length; ulo++){
            if(alfabetoMinusculo[min] == senha[ulo]){
                temMinusculoNaSenha += 1
            }
        }
    }

    for(let esp = 0; esp < caracteresEspeciais.length; esp++){        
        for(let cia = 0; cia < senha.length; cia++){
            if(caracteresEspeciais[esp] == senha[cia]){
                temCaracterEspecial += 1
            }
        }
    }

    if((temMinusculoNaSenha && temMaiusculoNaSenha) || (temNumeroNaSenha && temCaracterEspecial)){
        console.log("Passou em pelo menos duas condições")
    }

}

validaSenha(senha)