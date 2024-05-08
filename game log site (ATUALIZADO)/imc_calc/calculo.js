function CalcularIMC() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    if (altura[1] == ",") {
        altura = altura.replace(",", ".")
    }
    if (peso[2] == "," || peso[3] == ",") {
        peso = peso.replace(",", ".")
    }
    let imc = peso / (altura ** 2)

    let situacao = ""
    if (imc < 17) {
        situacao = "Muito abaixo do peso"
    }
    if (imc >= 17 && imc <= 18.49) {
        situacao = "Abaixo do peso"
    }
    if (imc >= 18.5 && imc <= 24.99) {
        situacao = "Peso normal"
    }
    if (imc >= 25 && imc <= 29.99) {
        situacao = "Acima do peso"
    }
    if (imc >= 30 && imc <= 34.99) {
        situacao = "Obesidade I"
    }
    if (imc >= 35 && imc <= 39.99) {
        situacao = "Obesidade II (severa)"
    }
    if (imc > 40) {
        situacao = "Obesidade III (mórbida)"
    }

    alert(`Seu IMC é igual a: ${imc.toFixed(2)}\n\nE sua situação é: ${situacao}`)
    console.log(peso)
}
