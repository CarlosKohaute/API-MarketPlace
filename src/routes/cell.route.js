const route = require('express').Router();
const { Router } = require('express');
const controllerCells = require('../controllers/cell.controller');

route.get('/find-cells', controllerCells.findAllCellsController);
route.get('/find-cells/:id', controllerCells.findByIdCellController);
route.post('/create', controllerCells.createCellController);
route.put('/update/:id', controllerCells.updateCellController);
route.delete('/delete/:id', controllerCells.deleteCellController);

module.exports = route;
