const express = require('express');
const cors = require('cors');
const path = require('path');
const routes = require('./routes/index');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Serve a pasta public
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

// Quando acessar a raiz, envia o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
