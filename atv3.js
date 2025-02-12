let aplicarDesconto = function(valorCompra, codigoDesconto) {
    let valorFinal;

    switch (codigoDesconto) {
        case "DESC10":
            valorFinal = valorCompra * 0.9; // Aplica 10% de desconto
            break;
        case "DESC20":
            valorFinal = valorCompra * 0.8; // Aplica 20% de desconto
            break;
        default:
            valorFinal = valorCompra; // Nenhum desconto aplicado
            break;
    }

    return valorFinal;
};

// Testando a função
console.log(aplicarDesconto(100, "DESC10")); // 90
console.log(aplicarDesconto(100, "DESC20")); // 80
console.log(aplicarDesconto(100, "INVALIDO")); // 100
