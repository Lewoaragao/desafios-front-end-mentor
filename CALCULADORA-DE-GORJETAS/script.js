var porcentButtons = document.querySelectorAll('.porcent')
var inputs = document.querySelectorAll('.input')
var txtAlertZero = document.getElementById('txtAlertZero')

inputs[0].onfocus = () => {
    inputs[0].placeholder = ''
}

inputs[0].onblur = () => {
    inputs[0].placeholder = '0'
}

inputs[1].style.textAlign = 'center'

inputs[1].onfocus = () => {
    inputs[1].placeholder = ''
    inputs[1].style.textAlign = 'right'
}

inputs[1].onblur = () => {
    inputs[1].placeholder = 'Custom'
    inputs[1].style.textAlign = 'center'
}

inputs[2].onfocus = () => {
    inputs[2].placeholder = ''
}

inputs[2].onblur = () => {
    inputs[2].placeholder = '0'
}

inputs[2].onkeyup = () => {
    if(inputs[2].value == '') {
        txtAlertZero.style.display = 'none'
    } else if(inputs[2].value == 0) {
        txtAlertZero.style.display = 'block'
    } else {
        txtAlertZero.style.display = 'none'
    }
}
