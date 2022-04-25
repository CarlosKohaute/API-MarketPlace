const Cells = require('../models/Cell');

const findAllCellsService = async () => {
  const cells = await Cells.find();
  return cells;
};
const findByIdCellservice = async (idParam) => {
  const cell = await Cells.findById(idParam);
  return cell;
};

const createCellservice = async  (newCell) => {
  const cellCreated = await Cells.create(newCell)
  return cellCreated;
};

const updateCellservice = async (id, cellEdited) => {
  const cellUpdate = await Cells.findByIdAndUpdate(id, cellEdited)
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
