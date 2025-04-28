let pacientes = [];

const adicionarPaciente = (paciente) => {
  pacientes.push(paciente);
};

const getPacientes = () => {
  return pacientes;
};

module.exports = {
  adicionarPaciente,
  getPacientes
};
