import React from "react";

export default prop => {

    function gerarNumeros() {        
        const min = 1;
        const max = 60;
        const aleatorio = parseInt(Math.random() * (max - min)) + min;

        return aleatorio;
    }

    function gerarNumerosMegaSena(qtde) {
        const numeros = [];
        for(let i = 0; i < qtde; i++) {
            
            const numero = gerarNumeros();
            if (verificarSeNumeroNaoExiste(numeros, numero)) {
                numeros.push(numero);
            }
        }

        return numeros.sort((a, b) => a - b);
    }

    function verificarSeNumeroNaoExiste(numeros, numero) {
       for(let indice = 0; indice < numeros.length; indice++) {
           if (numeros[indice] == numero) {
               return false;
           }
       }

       return true;
    }    


    return (
        <div>
            {gerarNumerosMegaSena(7).toString()}
        </div>
    )
}