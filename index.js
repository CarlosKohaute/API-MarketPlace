const express = require('express');
const port = 3000;
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const cells = [
  {
    id: 1,
    nome: 'Xiaomi 12 PRO',
    photo: './assets/images/xiaomi12pro.png',
    configs:
      'Versão global xiaomi 12 pro smartphone 8gb 256gb/12gb 256gb snapdragon 8 gen 1 núcleo octa 6.73 polegada display 120hz 4600mah 120w',
    price: 4.0,
  },
  {
    id: 2,
    nome: 'Iphone 13 PRO',
    photo: './assets/images/iphone13pro.png',
    configs: 'Apple iPhone 13 Pro 128GB Prateado Tela 6,1” - 12MP iOS ',
    price: 7.8,
  },
];

app.get('/', function (req, res) {
  res.send('Hello Word');
});

app.get('/cells/find-cells', (req, res) => {
  res.send(cells);
});

app.get('/cells/find-cells/:id', (req, res) => {
  const idParam = req.params.id;
  const chosenCell = cells.find((cell) => cell.id == idParam);
  res.send(chosenCell);
});

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
