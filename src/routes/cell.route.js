const route = require('express').Router();
const controllerCells = require('../controllers/cell.controller');

route.get('/find-cells', controllerCells.findAllCellsController);
route.get('/find-cells/:id', controllerCells.findByIdCellController);

module.exports = route;
