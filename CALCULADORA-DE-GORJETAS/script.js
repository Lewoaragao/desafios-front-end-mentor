var porcentButtons = document.querySelectorAll('.porcent')
var inputs = document.querySelectorAll('.input')
const txtAlertZero = document.getElementById('txtAlertZero')
var tipAmountPerson = document.getElementById('tipAmountPerson')
var totalPerson = document.getElementById('totalPerson')
const btnReset = document.getElementById('btnReset')

inputs[1].style.textAlign = 'center'
tipAmountPerson.value = 0
totalPerson.value = 0

inputs[0].onfocus = () => {
    inputs[0].placeholder = ''
}

inputs[0].onblur = () => {
    inputs[0].placeholder = '0'
}

inputs[1].onfocus = () => {
    inputs[1].placeholder = ''
}

inputs[1].onblur = () => {
    inputs[1].placeholder = 'Custom'
}

inputs[2].onfocus = () => {
    inputs[2].placeholder = ''
}

inputs[2].onblur = () => {
    inputs[2].placeholder = '0'
}

for(let i = 0; i < inputs.length; i++) {
    inputs[i].onkeyup = () => {
        if(inputs[2].value == '') {
            txtAlertZero.style.display = 'none'
        } else if(inputs[2].value == 0) {
            txtAlertZero.style.display = 'block'
        } else {
            txtAlertZero.style.display = 'none'
            tipAmountPerson.value = `$ ${((parseInt(inputs[0].value) * (parseInt(inputs[1].value) / 100)) / parseInt(inputs[2].value)).toFixed(2)}`
            totalPerson.value = `$ ${((parseInt(inputs[0].value) + (parseInt(inputs[0].value) * (parseInt(inputs[1].value) / 100))) / parseInt(inputs[2].value)).toFixed(2) }`
        }  
    }
}

btnReset.onclick = () => {
    for(let i = 0; i < inputs.length; i++) {
        inputs[i].value = ''
    }
}