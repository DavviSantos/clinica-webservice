const express = require('express');
const router = express.Router();

const pacienteController = require('../controllers/pacienteController');
const consultaController = require('../controllers/consultaController');

// Rotas de pacientes
router.post('/pacientes', pacienteController.criarPaciente);
router.get('/pacientes', pacienteController.listarPacientes);

// Rotas de consultas
router.post('/consultas', consultaController.criarConsulta);
router.get('/consultas', consultaController.listarConsultas);

module.exports = router;
