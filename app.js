// app.js
const express = require('express');
const bodyParser = require('body-parser');
const alunoRoutes = require('./routes/aluno.routes');
const sequelize = require('./config/db.config');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', alunoRoutes);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Conectado ao banco de dados');
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(error => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });
