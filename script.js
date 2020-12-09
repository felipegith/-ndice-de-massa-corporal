
const peso = document.querySelector('div.containerfin input')
const altura = document.querySelector('div.containerfinn input')

const buttonPeso = document.querySelector('button.calc');

buttonPeso.onclick = function(){


    const recebendoValorDoInputPeso = peso.value
    const recebendoValorDoInputAltura = altura.value
    const calculo = recebendoValorDoInputPeso / Math.pow(2,recebendoValorDoInputAltura).toFixed(3)

    

    document.getElementById('pegavalorscript').innerHTML=(calculo.toFixed(2))

}
