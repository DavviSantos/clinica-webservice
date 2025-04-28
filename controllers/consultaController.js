const Consulta = require('../models/consultaModel');

const criarConsulta = (req, res) => {
  const consulta = req.body;
  Consulta.adicionarConsulta(consulta);
  res.status(201).send('Consulta agendada com sucesso');
};

const listarConsultas = (req, res) => {
  res.json(Consulta.getConsultas());
};

module.exports = {
  criarConsulta,
  listarConsultas
};
