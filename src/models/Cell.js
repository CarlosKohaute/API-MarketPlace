const mongoose = require('mongoose');

const CellSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  photo: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
});

const Cell = mongoose.model('cells', CellSchema);

module.exports = Cell;
