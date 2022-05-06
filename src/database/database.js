const mongoose = require('mongoose');

const connectToDatabase = () => {
  mongoose
    .connect('mongodb+srv://kohaute:admin@api-marketplace.uksps.mongodb.net/marketplace?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB CONNECT!!'))
    .catch((err) => console.log(`Error to connect with MongoDB! erro ${err}`));
};

module.exports = connectToDatabase;
