const form = document.getElementById('form-atividade');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const n1 = document.getElementById('numeroA');
    const n2 = document.getElementById('numeroB');

    if(n1.value < n2.value){
        alert('B');
    }else if(n1.value === n2.value){
        alert('iguais');
    }else {
        alert('A');
    }
});