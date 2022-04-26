const cellsService = require('../services/cell.service');
const mongoose = require('mongoose');

const findAllCellsController = async (req, res) => {
  const allcells = await cellsService.findAllCellsService();
  if (allcells.length == 0) {
    return res.status(404).send({ message: 'Não existe celular cadastrado!' });
  }
  res.send(allcells);
};

const findByIdCellController = async (req, res) => {
  const idParam = req.params.id;
  const chosenCell = await cellsService.findByIdCellservice(idParam);
  if (!chosenCell) {
    return res.status(404).send({ message: 'Celular não encontrado!!' });
  }
  res.send(chosenCell);
};

const createCellController = async (req, res) => {
  const cell = req.body;
  const newCell = await cellsService.createCellservice(cell);
  res.status(201).send(newCell);
};

const updateCellController = async (req, res) => {
  const idParam = req.params.id;

  const cellEdit = req.body;
  if (
    !cellEdit ||
    !cellEdit.name ||
    !cellEdit.price ||
    !cellEdit.photo ||
    !cellEdit.description
  ) {
    return res
      .status(400)
      .send({ message: ' Envie todos os campos preenchidos!' });
  }
  const updatedCell = await cellsService.updateCellservice(idParam, cellEdit);
  res.send(updatedCell);
};

const deleteCellController = async (req, res) => {
  const idParam = req.params.id;
  await cellsService.deleteCellservice(idParam);
  res.send({ message: 'Celular deletado com sucesso!' });
};
module.exports = {
  findAllCellsController,
  findByIdCellController,
  createCellController,
  updateCellController,
  deleteCellController,
};
