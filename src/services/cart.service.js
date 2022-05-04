const Cart = require('../models/Cart');

const findAllCartService = async () => {
  const allCart = await Cart.find();
  return allCart;
};

const createManyItemsCartService = async (newCart) => {
  const createdCart = await Cart.insertMany(newCart);
  return createdCart;
};

const deleteAllItemsCartService = async () => {
  return await Cart.deleteMany();
};

module.exports = {
  findAllCartService,
  createManyItemsCartService,
  deleteAllItemsCartService,
};
