const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
  cellId: {
    type: String,
    require: true,
  },
  theAmount: {
    type: Number,
    require: true,
  },
});

const Cart = mongoose.model('cart', CartSchema);

module.exports = Cart;
