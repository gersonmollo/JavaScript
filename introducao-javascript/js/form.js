let botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    
    const form = document.querySelector('#formAdiciona');
    const paciente = obtemPacienteFormulario(form);    
    const erros = validaPaciente(paciente);
    
    if (erros.length > 0) {
        exibeErros(erros);
        return;
    }

    adicionaPacientesNaTabela(paciente);

    form.reset();
    const mensagensErro = document.querySelector('#mensagens-erro');
    mensagensErro.innerHTML = '';
});

function adicionaPacientesNaTabela(paciente) {
    const pacienteTr = montaTr(paciente);
    const tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function obtemPacienteFormulario(form) {
    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    let pacienteTr = document.createElement('tr');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    let td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {
    var erros = [];
    if (!validaPeso(paciente.peso)) erros.push('Peso é inválido!');

    if (!validaAltura(paciente.altura)) erros.push('Altura é inválida!');

    if (paciente.nome.length == 0) erros.push('O nome não pode ser em branco!');

    if (paciente.gordura.length == 0) erros.push('A gordura do paciente não pode ser branco!');

    if (paciente.peso.length == 0) erros.push('O peso não pode ser em branco!');

    if (paciente.altura.length == 0) erros.push('A altura não pode ser em branco!');

    return erros;
}

function exibeErros(erros) {
    let ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = '';

    erros.forEach(function(value) {
        let li = document.createElement('li');

        li.textContent = value;
        ul.appendChild(li);
    });
}