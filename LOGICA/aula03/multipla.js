// Avaliador de entregas
// Para estruturar decisões no código utilizamos a família if else.
//if = se 
//else = senão 
// else if = senão se
// O if  pede uma condição e se ela for atendida, executa o código que está entre {}
// Já o else serve para atender os casos que não contemplam as condições anteriores.
// Se tivermos mais de uma condição, como eno exemplo abaixo, é necessário utilizar o else if, que nega o if anterior e propõe uma nova condição.
// Por exemplo, se nao for nota 5, mas for nota 4, o programa escreve Parabéns! na sua tela.

let nota = 2

 if ( nota == 5) {
        console.log("Parabéns! Muito bom!");
}   
 else if (nota == 4){
    console.log("Parabéns!");
}
else if (nota == 3){
    console.log("Poderia ser melhor.");
}
else if (nota == 2){
    console.log("Minha vó é melhor que você.");
}
else if (nota == 1){
    console.log("Vai trabalhar de CLT pelo resto da eternidade...");
}
else {
    console.log("INSIRA UMA NOTA VÁLIDA DE 1 A 5!!!")
}

