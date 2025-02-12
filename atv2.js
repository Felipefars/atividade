let realizarLogin = function(nomeUsuario, senha) {
    if (nomeUsuario === "admin" && senha === "1234") {
        return "Login bem-sucedido";
    } else {
        return "Usuário ou senha incorretos";
    }
}
console.log(realizarLogin("admin", "1234")); // "Login bem-sucedido"
console.log(realizarLogin("admin", "senhaErrada")); // "Usuário ou senha incorretos"
console.log(realizarLogin("usuario", "1234")); // "Usuário ou senha incorretos"
