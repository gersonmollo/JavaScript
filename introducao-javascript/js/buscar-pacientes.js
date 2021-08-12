const buscaPacientes = document.querySelector('#buscar-pacientes');

buscaPacientes.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    const erroAjax = document.querySelector('#erro-ajax');

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function() {
        if (xhr.status === 200) {
            const resposta = xhr.responseText;
            const pacientes = JSON.parse(resposta);
            
            erroAjax.classList.add('invisivel');
            pacientes.forEach(paciente => {
                adicionaPacientesNaTabela(paciente);
            });
        } else {            
            erroAjax.classList.remove('invisivel');
        }                
    });

    xhr.send();
})