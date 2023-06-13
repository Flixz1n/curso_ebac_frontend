const form = document.getElementById('form-atividade');
let formValido = false;

function numeroValido(valA, valB){
    return valB > valA;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const valA = parseFloat(document.getElementById('numeroA').value);
    const valB = parseFloat(document.getElementById('numeroB').value);

    let messagesucess = 'formulario enviado com sucesso! Verificando: <b> Valor A menor que Valor B!</B>';
    let containermessagesucess = document.querySelector('.success-message');

    formValido = numeroValido(valA, valB);

    if (formValido) {
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block'
        document.querySelector('.error-message').style.display = 'none';

        valA.value = '';
        valB.value = '';
        
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }
});