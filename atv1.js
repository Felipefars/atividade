let classificarIdade = function(idade) {
    let resultado;
    
    if (idade < 18) {
        resultado = "Menor de idade";
    } else if (idade >= 18 && idade <= 65) {
        resultado = "Adulto";
    } else {
        resultado = "Idoso";
    }

    return resultado;
}

console.log(classificarIdade(15)); 
console.log(classificarIdade(17)); 
console.log(classificarIdade(70)); 
