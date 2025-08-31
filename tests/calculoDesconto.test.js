const {calcularDesconto} = require('../src/calculoDesconto');
const prompt = require("prompt-sync")();

let valorDoProduto = prompt("Digite o valor do produto:");
let desconto = prompt("Digite o valor do desconto: ")

const calculoDoDesconto = calcularDesconto(valorDoProduto,desconto);
console.log("Valor final: ", calculoDoDesconto);