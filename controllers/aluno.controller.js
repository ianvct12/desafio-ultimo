// controllers/aluno.controller.js
const alunoService = require('../services/aluno.service');

const getAllAlunos = async (req, res) => {
  try {
    const alunos = await alunoService.getAllAlunos();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAlunoById = async (req, res) => {
  try {
    const aluno = await alunoService.getAlunoById(req.params.id);
    if (aluno) {
      res.status(200).json(aluno);
    } else {
      res.status(404).json({ message: 'Aluno não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createAluno = async (req, res) => {
  try {
    const aluno = await alunoService.createAluno(req.body);
    res.status(201).json(aluno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateAluno = async (req, res) => {
  try {
    const aluno = await alunoService.updateAluno(req.params.id, req.body);
    if (aluno) {
      res.status(200).json(aluno);
    } else {
      res.status(404).json({ message: 'Aluno não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteAluno = async (req, res) => {
  try {
    const result = await alunoService.deleteAluno(req.params.id);
    if (result) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Aluno não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAlunos,
  getAlunoById,
  createAluno,
  updateAluno,
  deleteAluno,
};
