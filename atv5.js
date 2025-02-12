let classificarNota = function(nota) {
    if (nota >= 9) {
        return "Excelente";
    } else if (nota >= 7 && nota < 9) {
        return "Bom";
    } else if (nota >= 5 && nota < 7) {
        return "Regular";
    } else {
        return "Insuficiente";
    }
};

// Testando a função
console.log(classificarNota(9.5));  // "Excelente"
console.log(classificarNota(8));    // "Bom"
console.log(classificarNota(6));    // "Regular"
console.log(classificarNota(4));    // "Insuficiente"

