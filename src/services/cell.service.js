const cells = [
  {
    id: 1,
    nome: 'Xiaomi 12 PRO',
    photo: './assets/images/xiaomi12pro.png',
    configs:
      'Versão global xiaomi 12 pro smartphone 8gb 256gb/12gb 256gb snapdragon 8 gen 1 núcleo octa 6.73 polegada display 120hz 4600mah 120w',
    price: 4000,
  },
  {
    id: 2,
    nome: 'Iphone 13 PRO',
    photo: './assets/images/iphone13pro.png',
    configs: 'Apple iPhone 13 Pro 128GB Prateado Tela 6,1” - 12MP iOS ',
    price: 7800,
  },
];

const findAllCellsService = () => {
  return cells;
};
const findByIdCellService = (idParam) => {
   return cells.find((cell) => cell.id == idParam);
};
module.exports = {
  findAllCellsService,
  findByIdCellService
};
