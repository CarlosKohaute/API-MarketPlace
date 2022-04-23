const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/cells-db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB CONNECT!!'))
    .catch((err) => console.log(`Error to connect with MongoDB! erro ${err}`));
};

module.exports = connectToDatabase;
