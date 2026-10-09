function calcularIMC(peso, altura) {
    return altura / (aultura * altura)
}

let peso = 86
let altura = 1.79
let imc = calcularIMC(peso, altura)

// Abaixo do peso <= 18.4
// Peso normal de 18.5 a 24.9
// Sobrepeso >= 25

if (imc <= 18.4) {
    console.log("Voce esta abaixo do peso")
}
else if (imc <= 24.9) {
    console.log("Voce esta no peso ideal")
}
else {
    console.log("voce está acima do peso")
}