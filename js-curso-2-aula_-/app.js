let numeroSecreto = gerarNumeroAleatorio();
//funcão com parâmetro
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do número secreto');
exibirTextoNaTela('p','Escolha um número entre 1 e 10');

//função sem parâmetro sem retorno
function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

//funcão com retorno
function gerarNumeroAleatorio(){
   return parseInt(Math.random() * 10 + 1);
}

