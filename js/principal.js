var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


// Calculo IMC
var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso invalido")
        pesoValido = false;
        tdImc.textContent = "Peso invalido!"
        paciente.classList.add("paciente-invalido")
    }
    if(altura <= 0 || altura >= 3.00){
        console.log("Altura invalida")
        alturaValida = false;
        tdImc.textContent = "Altura invalida!"
        paciente.classList.add("paciente-invalido")
    }
    if(alturaValida && pesoValido){
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}
 function calculaImc(peso, altura){
        var imc = 0;
        imc = peso / (altura * altura);
        return imc.toFixed(2);
 }