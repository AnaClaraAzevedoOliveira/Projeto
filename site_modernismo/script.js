let fontSize = 16;
document.getElementById("aumentar-fonte").addEventListener("click", () => {
    fontSize += 2;
    document.body.style.fontSize = fontSize + "px";
});
document.getElementById("diminuir-fonte").addEventListener("click", () => {
    if (fontSize > 10) {
        fontSize -= 2;
        document.body.style.fontSize = fontSize + "px";
    }
});

const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade')
const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')
botaoDeAcessibilidade.addEventListener('click', function (){
    botaoDeAcessibilidade.classList.toggle('rotacao-botao');
    opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
   })

   classList.toggle('acessibilidade')