const cartService = require('../services/cart.service');

const findAllCartController = async (req, res) => {
  const allCart = await cartService.findAllCartService();
  if (!allCart) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item no carrinho!' });
  }
  res.send(allCart);
};

const createManyItemsCartController = async (req, res) => {
  const cart = req.body;
  const newCart = await cartService.createManyItemsCartService(cart);
  res.status(201).send(newCart);
};

const deleteAllItemsCartController = async (req, res) => {
  await cartService.deleteAllItemsCartService();
  res.ser({ message: 'Carrinho deletado com sucesso!' });
};
module.exports = {
  findAllCartController,
  createManyItemsCartController,
  deleteAllItemsCartController,
};
