const form = document.getElementById('formcontato__form');
const campos = document.querySelectorAll('.required');
const spanCampoVazio = document.querySelectorAll('.span-campo-vazio');
const spanLimiteCaracteres = document.querySelectorAll('.span-limite-caracteres');
const spanEmailInvalido = document.querySelectorAll('.span-email-invalido');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setErrorCampoVazio(index) {
    spanCampoVazio[index].style.display = 'block';
}

function setErrorLimiteCaracteres(index) {
    spanLimiteCaracteres[index].style.display = 'block';
}

function setErrorEmail() {
    spanEmailInvalido[0].style.display = 'block';
}

function removeErrorCampoVazio(index) {
    spanCampoVazio[index].style.display = 'none';
}

function removeErrorLimiteCaracteres(index) {
    spanLimiteCaracteres[index].style.display = 'none';
}

function removeErrorEmail() {
    spanEmailInvalido[0].style.display = 'none';
}


function validaNome() {
    if (campos[0].value.length == 0) {
        setErrorCampoVazio(0);
    }
    else {
        removeErrorCampoVazio(0);
    }

    if (campos[0].value.length > 50) {
        setErrorLimiteCaracteres(0);
    }
    else {
        removeErrorLimiteCaracteres(0);
    }
}

function validaEmail() {
    if (campos[1].value.length == 0) {
        setErrorCampoVazio(1);
    }
    else {
        removeErrorCampoVazio(1);
    }
    if (!emailRegex.test(campos[1].value)) {
        setErrorEmail(1);
    }
    else {
        removeErrorEmail(1);
    }

}

function validaAssunto() {
    if (campos[2].value.length == 0) {
        setErrorCampoVazio(2);
    }
    else {
        removeErrorCampoVazio(2);
    }

    if (campos[2].value.length > 50) {
        setErrorLimiteCaracteres(2);
    }

    else {
        removeErrorLimiteCaracteres(2);

    }
}

function validaMensagem() {
    if (campos[3].value.length == 0) {
        setErrorCampoVazio(3);
    }
    else {
        removeErrorCampoVazio(3);
    }

    if (campos[3].value.length > 300) {
        setErrorLimiteCaracteres(3);
    }
    else {
        removeErrorLimiteCaracteres(3);
    }
}

function enviar() {
    if (campos[0].value.length == 0 || campos[1].value.length == 0 || campos[2].value.length == 0 || campos[3].value.length == 0 || campos[0].value.length > 50 || campos[1].value.length > 50 || campos[2].value.length > 50 || campos[3].value.length > 300 || !emailRegex.test(campos[1].value)) {
        alert('Preencha todos os campos obrigatórios corretamente!');
    }
    else {
        alert('Formulário enviado com sucesso!');
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validaNome();
    validaEmail();
    validaAssunto();
    validaMensagem();
});