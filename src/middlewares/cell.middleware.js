const mongoose = require('mongoose');

const validId = (req, res, next) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  next();
};

const validObjectBody = (req, res, next) => {
  const cell = req.body;

  if (!cell || !cell.name || !cell.price || !cell.photo || !cell.description) {
    return res
      .status(400)
      .send({ message: ' Envie todos os campos preenchidos!' });
  }
  next();
};

const validObjectBodyCart = (req, res, next) => {
  const cart = req.body;

  cart.forEach((item) => {
    if (!item || !item.cellId || !item.theAmount) {
      return res
        .status(400)
        .send({ message: ' Envie todos os campos dos celulares!' });
    }
  });
  next();
};
module.exports = {
  validId,
  validObjectBody,
  validObjectBodyCart,
};
