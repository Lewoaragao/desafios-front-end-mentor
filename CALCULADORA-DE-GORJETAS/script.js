// var inputCustom = document.getElementById('input-custom')
var porcentButtons = document.querySelectorAll('.porcent')
var inputs = document.querySelectorAll('.input')
var porcent = 0;

// inputCustom.onfocus = () => {
//     inputCustom.placeholder = ''
// }

// inputCustom.onblur = () => {
//     inputCustom.placeholder = 'Custom'
// }

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