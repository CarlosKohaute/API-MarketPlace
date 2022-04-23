const Cells = require('../models/Cell');

const findAllCellsService = async () => {
  const cells = await Cells.find();
  return cells;
};
const findByIdCellservice = async (idParam) => {
  const cell = await Cells.findById(idParam);
  return cell;
};

const createCellservice = (newCell) => {
  const newId = cells.length + 1;
  newCell.id = newId;
  cells.push(newCell);
  return newCell;
};

const updateCellservice = (id, cellEdited) => {
  cellEdited['id'] = id;
  const cellIndex = cells.findIndex((cell) => cell.id == id);
  cells[cellIndex] = cellEdited;
  return cellEdited;
};

const deleteCellservice = (id) => {
  const cellIndex = cells.findIndex((cell) => cell.id == id);
  return cells.splice(cellIndex, 1);
};
module.exports = {
  findAllCellsService,
  findByIdCellservice,
  createCellservice,
  updateCellservice,
  deleteCellservice,
};
