const Cells = require('../models/Cell');

const findAllCellsService = async () => {
  const allCells = await Cells.find();
  return allCells;
};
const findByIdCellservice = async (idParam) => {
  const oneCell = await Cells.findById(idParam);
  return oneCell;
};

const createCellservice = async  (newCell) => {
  const cellCreated = await Cells.create(newCell)
  return cellCreated;
};

const updateCellservice = async (idParam, cellEdited) => {
  const cellUpdate = await Cells.findByIdAndUpdate(idParam, cellEdited)
  return cellUpdate;
};

const deleteCellservice = async (id) => {
  return await Cells.findByIdAndDelete(id)
};
module.exports = {
  findAllCellsService,
  findByIdCellservice,
  createCellservice,
  updateCellservice,
  deleteCellservice,
};
