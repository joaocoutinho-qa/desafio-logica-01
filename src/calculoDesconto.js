function calcularDesconto(valorDaCompra,desconto){
    const valorFinalDaCompra = valorDaCompra - (valorDaCompra*desconto);
    return valorFinalDaCompra;
}

module.exports = {
    calcularDesconto
}