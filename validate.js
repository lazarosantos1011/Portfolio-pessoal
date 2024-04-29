/*let nome = document.getElementById('nome');
let email = document.getElementById('email');
let assunto = document.getElementById('assunto');
let mensagem = document.getElementById('mensagem');*/

var inputs = document.querySelectorAll('.formcontato__input, .formcontato__textarea');
var button = document.querySelectorAll('formcontato__botao');

function validaNome() {
    if (nome.value.length == 0) {
        nome.innerHTML = 'O campo Nome não pode estar vazio';
        nome.style.color = 'red';
    } else if (nome.value.length > 50) {
        nome.innerHTML = 'Nome pode ter no máximo 50 caracteres';
        nome.style.color = 'red';
    } else if (nome.value.length <= 50) {
        nome.style.color = 'black';
    }
}

function validaEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        email.innerHTML = 'Email inválido';
        email.style.color = 'red';
    }
}

function validaAssunto() {

}

function validaMensagem() {
    
}

function enviar() {
    if (nome.style.color != 'red' && email.style != 'red') {
        alert('Formulário enviado com sucesso!');
    } else if (button.disabled == true) {
        alert('Formulário já foi enviado, aguarde a resposta...');
    
    } else {
        alert('Preencha o formulário corretamente antes de enviar...');
    }
}

// Function to check if all fields are filled
function checkFields() {
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            return false;
        }
    }
    return true;
}

// Add event listener to each input and textarea
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', function() {
        if (checkFields()) {
            button.disabled = false;
        } else {
            button.disabled = true;
        }
    });
}

button.disabled = true;