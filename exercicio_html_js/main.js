const form = document.getElementById('form-atividade');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const n1 = document.getElementById('numeroA');
    const n2 = document.getElementById('numeroB');

    if(n1.value < n2.value){
        alert('O valor do campo B é maior');
    }else if(n1.value === n2.value){
        alert('Os valores dos campos são iguais');
    }else {
        alert('O valor do campo A é maior');
    }
});