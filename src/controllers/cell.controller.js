const cellsService = require('../services/cell.service');

const findAllCellsController = (req, res) => {
  const cells = cellsService.findAllCellsService();
  res.send(cells);
};

const findByIdCellController = (req, res) => {
  const idParam = Number(req.params.id);
  const chosenCell = cellsService.findByIdCellService(idParam);
  res.send(chosenCell);
};

module.exports= {
  findAllCellsController,
  findByIdCellController,
};
