let classificarNumero = function(numero) {
    return numero > 0 
        ? (numero % 2 === 0 ? "Positivo e Par" : "Positivo e Ímpar") 
        : (numero < 0 ? "Negativo" : "Zero");
};

// Testando a função
console.log(classificarNumero(10));  // "Positivo e Par"
console.log(classificarNumero(7));   // "Positivo e Ímpar"
console.log(classificarNumero(-5));  // "Negativo"
console.log(classificarNumero(0));   // "Zero"
