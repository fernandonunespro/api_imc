function efetuarCalculoImc(peso, altura) {
  const imc = peso / (altura * altura);
  return imc;
}

function retornaStatusImc(imc) {
  const status = {
    abaixoDoPeso: imc < 18.5,
    pesoAdequado: imc >= 18.5 && imc < 24.9,
    sobrepeso: imc >= 24.9 && imc < 30,
    obeso: imc >= 30,
  };

  return status[imc] ? status[imc] : null;
}

function validaParametro(parametro) {
  return !isNaN(parametro) && parametro !== 0;
}

exports.efetuarCalculoImc = efetuarCalculoImc;
exports.retornaStatusImc = retornaStatusImc;
exports.validaParametro = validaParametro;