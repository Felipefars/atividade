let verificarAnoBissexto = function(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é ano bissexto";
    }
};

// Testando a função
console.log(verificarAnoBissexto(2020));  
console.log(verificarAnoBissexto(1900));  
console.log(verificarAnoBissexto(2000));  
console.log(verificarAnoBissexto(2023));  
