function Veiculo(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

function Carro(marca, modelo, ano) {
  Veiculo.call(this, marca, modelo, ano); 
}

function Moto(marca, modelo, ano) {
  Veiculo.call(this, marca, modelo, ano);
}

const carro1 = new Carro("Porsche", "Porsche 911", 2024);
const moto1 = new Moto("Harley-Davidson", "Fat Boy", 2011);
const moto2 = new Moto("Yamaha", "MT-07", 2022);

console.log(carro1); 
console.log(moto1);
console.log(moto2);  
