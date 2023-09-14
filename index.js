const express = require('express');
const app = express();

const calculadoraImc = require('./calcImc');

app.get('/', (req, res) => {
  const { peso, altura } = req.query;

  if (calculadoraImc.validaParametro(peso) && calculadoraImc.validaParametro(altura)) {
    const imc = calculadoraImc.efetuarCalculoImc(peso, altura);
    const status = calculadoraImc.retornaStatusImc(imc);

    const json = { imc, status };

    res.json(json);
  } 
  else {
    res.status(400).json({ erro: 'Peso ou altura inválidos' });
  }
});

app.listen(8080, () => {
  const data = new Date();
  console.log('Servidor Node iniciado em: ' + data);
});