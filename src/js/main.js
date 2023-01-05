const form = document.querySelector('form')

let inputWigth = document.querySelector('#weigth')
let inputHeigth = document.querySelector('#heigth')

let modal = document.querySelector('.modal-container')

let alert = document.querySelector('.alert')

let result

form.onsubmit = (event) => {
    event.preventDefault()

    let weigth = inputWigth.value
    let height = inputHeigth.value

    result = IMC(weigth, height)

    openModal()

}

//calculo do imc
const IMC = (weigth, height) => {
    return (weigth / ((height / 100) * 2)).toFixed(2)
}

//abre o modal
const openModal = () => {

    if(inputWigth.value == '' || inputHeigth.value == ''){
        inputEmpty()
    }else{
        modal.classList.add("open");
    
        alert.classList.add('hides')
        
    }

    document.querySelector(".modal h1").innerText =
    `Seu IMC é de ${result}`;

}

//fecha o modal
const closeModal = () => {
    modal.classList.remove('open')
    inputHeigth.value = ''
    inputWigth.value = ''
}


//caracteres errado
const inputEmpty = () => {
    
        alert.classList.remove('hides')
}

