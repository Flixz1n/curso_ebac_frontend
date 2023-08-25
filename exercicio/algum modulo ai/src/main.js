const form = document.getElementById('form-numerico');
const numeroA = document.getElementById('numero-a');
const numeroB = document.getElementById('numero-b');

form.addEventListener("submit", function(e)){
    e.preventdefault();
}

const mensagem = document.getElementById('mensagem')
const mensagemA = `O valor do campo <b>B</b> é maior que o valor do campo <b>A<b>`
const mensagemB = `O valor do campo <b>B<b> não é maior que o valor do campo <b>A<b>`

if(numeroB.value > numeroA.value) {
    mensagem.innerHTML = mensagemA
    mensagem.style.display = 'block';
} else {
    mensagem.innerHTML = mensagemB
    mensagem.style.display = "block";
}
