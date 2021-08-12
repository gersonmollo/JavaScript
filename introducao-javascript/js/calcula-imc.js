var titulo = document.querySelector('.titulo');
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    let peso = pacientes[i].querySelector('.info-peso').textContent;
    let altura = pacientes[i].querySelector('.info-altura').textContent;

    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);
    let pacienteInvalido = 'paciente-invalido';

    let imc;

    if (!pesoValido) {
        imc = "Peso Inválido";
    }

    if (!alturaValida) {
        imc = "Altura Inválida";
    }

    if (pesoValido && alturaValida){
        imc = calcularImc(peso, altura);
        color = 'white';
        pacienteInvalido = null;
    }

    pacientes[i].querySelector('.info-imc').textContent = imc;
    pacientes[i].classList.add(pacienteInvalido);
}

function calcularImc(peso, altura) {
    let imc = 0;
    imc = (peso / (altura * altura)).toFixed(2);
    return imc;
}

function validaPeso(peso) {
    if (peso <= 0 || peso >= 1000) {
        return false;
    }

    return true;
}

function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.00) {
        return false;
    }

    return true;
}