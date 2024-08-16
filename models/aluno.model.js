// models/aluno.model.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Aluno = sequelize.define('Aluno', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nota_primeiro_semestre: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nota_segundo_semestre: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  nome_professor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_sala: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Aluno;
