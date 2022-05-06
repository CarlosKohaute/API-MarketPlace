require('dotenv').config();
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/cell.route');
const connectToDatabase = require('./src/database/database');

connectToDatabase();

app.use(express.json());
app.use(cors());

app.use('/cells', routes);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
