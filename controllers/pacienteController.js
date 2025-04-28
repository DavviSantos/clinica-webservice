const Paciente = require('../models/pacienteModel');

const criarPaciente = (req, res) => {
  const paciente = req.body;
  Paciente.adicionarPaciente(paciente);
  res.status(201).send('Paciente cadastrado com sucesso');
};

const listarPacientes = (req, res) => {
  res.json(Paciente.getPacientes());
};

module.exports = {
  criarPaciente,
  listarPacientes
};
