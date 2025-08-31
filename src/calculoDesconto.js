function calcularDesconto(valor_da_compra,desconto){
    const valor_final_da_compra = valor_da_compra - (valor_da_compra*desconto);
    return valor_final_da_compra;
}

module.exports = {
    calcularDesconto
}