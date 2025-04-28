let consultas = [];

const adicionarConsulta = (consulta) => {
  consultas.push(consulta);
};

const getConsultas = () => {
  return consultas;
};

module.exports = {
  adicionarConsulta,
  getConsultas
};
