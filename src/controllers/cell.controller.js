const cellsService = require('../services/cell.service');
const mongoose = require('mongoose');

const findAllCellsController = async (req, res) => {
  const cells = await cellsService.findAllCellsService();

  if (cells.length == 0) {
    return res.status(404).send({ message: 'Não existe celular cadastrado!' });
  }
  res.send(cells);
};

const findByIdCellController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }

  const chosenCell = await cellsService.findByIdCellservice(idParam);

  if (!chosenCell) {
    return res.status(404).send({ message: 'Celular não encontrado!!' });
  }

  res.send(chosenCell);
};

const createCellController = async (req, res) => {
  const cell = req.body;

  if (!cell || !cell.name || !cell.price || !cell.photo || !cell.description) {
    return res
      .status(400)
      .send({ message: ' Envie todos os campos preenchidos!' });
  }
  const newCell = await cellsService.createCellservice(cell);
  res.status(201).send(newCell);
};

const updateCellController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
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

const deleteCellController =  async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
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
