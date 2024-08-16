// services/aluno.service.js
const Aluno = require('../models/aluno.model');

const getAllAlunos = async () => {
  return await Aluno.findAll();
};

const getAlunoById = async (id) => {
  return await Aluno.findByPk(id);
};

const createAluno = async (alunoData) => {
  return await Aluno.create(alunoData);
};

const updateAluno = async (id, alunoData) => {
  const aluno = await Aluno.findByPk(id);
  if (aluno) {
    return await aluno.update(alunoData);
  }
  return null;
};

const deleteAluno = async (id) => {
  const aluno = await Aluno.findByPk(id);
  if (aluno) {
    await aluno.destroy();
    return true;
  }
  return false;
};

module.exports = {
  getAllAlunos,
  getAlunoById,
  createAluno,
  updateAluno,
  deleteAluno,
};
