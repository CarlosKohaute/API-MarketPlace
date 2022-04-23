const cells = [
  {
    id: 1,
    name: 'Xiaomi 12 PRO',
    photo: './assets/images/xiaomi12pro.png',
    description:
      'Versão global xiaomi 12 pro smartphone 8gb 256gb/12gb 256gb snapdragon 8 gen 1 núcleo octa 6.73 polegada display 120hz 4600mah 120w',
    price: 4000,
  },
  {
    id: 2,
    name: 'Iphone 13 PRO',
    photo: './assets/images/iphone13pro.png',
    description: 'Apple iPhone 13 Pro 128GB Prateado Tela 6,1” - 12MP iOS ',
    price: 7800,
  },
];

const findAllCellsService = () => {
  return cells;
};
const findByIdCellservice = (idParam) => {
  return cells.find((cell) => cell.id == idParam);
};

const createCellservice = (newCell) => {
  const newId = cells.length + 1;
  newCell.id = newId;
  cells.push(newCell);
  return newCell;
};

const updateCellservice = (id, cellEdited) => {
  cellEdited['id'] = id;
  const cellIndex = cells.findIndex((cell) => cell.id == id);
  cells[cellIndex] = cellEdited;
  return cellEdited;
};

const deleteCellservice = (id) => {
  const cellIndex = cells.findIndex((cell) => cell.id == id);
  return cells.splice(cellIndex, 1);
};
module.exports = {
  findAllCellsService,
  findByIdCellservice,
  createCellservice,
  updateCellservice,
  deleteCellservice,
};
