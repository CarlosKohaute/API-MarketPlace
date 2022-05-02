const route = require('express').Router();
const { Router } = require('express');
const controllerCells = require('../controllers/cell.controller');
const {
  validId,
  validObjectBody,
  validObjectBodyCart,
} = require('../middlewares/cell.middleware');
const cartController = require('../controllers/cart.controller');

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

route.get('/all-cart', cartController.findAllCartController);
route.post(
  '/create-cart',
  validObjectBodyCart,
  cartController.createManyItemsCartController,
);
route.delete('/finish-cart', cartController.deleteAllItemsCartController);
module.exports = route;
