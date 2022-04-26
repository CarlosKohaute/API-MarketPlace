const route = require('express').Router();
const { Router } = require('express');
const controllerCells = require('../controllers/cell.controller');
const { validId, validObjectBody } = require('../middlewares/cell.middleware');

route.get('/find-cells', controllerCells.findAllCellsController);
route.get(
  '/find-one-cell/:id',
  validId,
  controllerCells.findByIdCellController,
);
route.post('/create', validObjectBody, controllerCells.createCellController);
route.put(
  '/update/:id',
  validId,
  validObjectBody,
  controllerCells.updateCellController,
);
route.delete('/delete/:id', validId, controllerCells.deleteCellController);

module.exports = route;
