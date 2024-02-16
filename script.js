document.addEventListener("DOMContentLoaded", function() {
    const btnGerar = document.getElementById("btnGerar");
    const displaySenha = document.getElementById("senhaGeradaDisplay");
    const btnCopiar = document.querySelector(".display__btnCopiar");


    btnGerar.addEventListener("click", function() {
        const comprimento = document.getElementById("number").value;
        const usarMinusculas = document.getElementById("chkLowerId").checked;
        const usarMaiusculas = document.getElementById("chkUpperId").checked;
        const usarNumeros = document.getElementById("chkNumberId").checked;
        const usarSimbolos = document.getElementById("chkSymbolsId").checked;

        const senhaGerada = gerarSenha(comprimento, usarMinusculas, usarMaiusculas, usarNumeros, usarSimbolos);
        displaySenha.textContent = senhaGerada;
    });

    btnCopiar.addEventListener("click", function() {
        const textoParaCopiar = displaySenha.textContent;
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                alert("Senha copiada para a área de transferência!");
            })
            .catch(err => {
                console.error('Falha ao copiar: ', err);
            });
    });

    function gerarSenha(comprimento, usarMinusculas, usarMaiusculas, usarNumeros, usarSimbolos) {
        const caracteresMinusculos = "abcdefghijklmnopqrstuvwxyz";
        const caracteresMaiusculos = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const caracteresNumeros = "0123456789";
        const caracteresSimbolos = "!@#$%^&*()_-+=";

        let caracteres = "";

        if (usarMinusculas) caracteres += caracteresMinusculos;
        if (usarMaiusculas) caracteres += caracteresMaiusculos;
        if (usarNumeros) caracteres += caracteresNumeros;
        if (usarSimbolos) caracteres += caracteresSimbolos;

        let senha = "";
        for (let i = 0; i < comprimento; i++) {
            senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        }
        return senha;
    }
});
