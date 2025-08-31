const {calcularDesconto} = require('../src/calculoDesconto');
const prompt = require("prompt-sync")();

let valor_produto = prompt("Digite o valor do produto:");
let desconto = prompt("Digite o valor do desconto: ")

const calculo_do_desconto = calcularDesconto(valor_produto,desconto);
console.log("Valor final: ", calculo_do_desconto);