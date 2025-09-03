const { expect } = require('chai');
const {calcularDesconto} = require('../src/calculoDesconto');

describe('Testes da Funçãso de Soma', function () {
    it('A função deve ser capaz de calcular o desconto de um produto', function () {
        // Coleta o resultado da função
        const resultadoDoValorFinal = calcularDesconto(50,0.25);

        // Compara o resultado com o valor que você espera
        expect(resultadoDoValorFinal).to.equal(37.5);
    });

    it('A função deve ser capaz de somar um número positivo e um negativo', function () {
        // Coleta o resultado da função
        const resultadoDoValorFinal = calcularDesconto(50,0);

        // Compara o resultado com o valor que você espera
        expect(resultadoDoValorFinal).to.equal(50);
    });
});