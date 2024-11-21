const primeiroValor = document.querySelector("#number1")
const segundoValor = document.querySelector("#number2")


const btnsomar = document.querySelector("#somar")
const btnSubtrair = document.querySelector("#subtrair")
const btnMultiplicar = document.querySelector("#Multiplicar")
const btnDividir = document.querySelector("#Dividir")

const resultado = document.querySelector("#res")

function somar() {
    resultado.innerHTML= Number(primeiroValor.value) + Number
    (segundovalor.value)
}



function subtrair() {

    resultado.innerHTML= Number(primeiroValor.value) - Number
    (segundovalor.value)
}




function Multiplicar() {


    resultado.innerHTML= Number(primeiroValor.value) * Number
    (segundovalor.value)
}




function Dividir() {
    resultado.innerHTML= Number(primeiroValor.value) / Number
    (segundovalor.value)
}



