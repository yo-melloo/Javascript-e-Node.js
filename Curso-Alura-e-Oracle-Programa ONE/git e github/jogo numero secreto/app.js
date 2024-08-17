let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let highlight = "color:#ae6ccc;";

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function exibirMensagemInicial() {
  exibirTextoNaTela(
    "h1",
    `Desafio do <span style="${highlight}">Código Secreto</span>`
  );
  exibirTextoNaTela(
    "p",
    `Escolha um número <span style="${highlight}">entre 1 e 3</span>`
  );
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela(
      "h1",
      `<span style="${highlight}">Parabens, você acertou!</span>`
    );
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o código secreto com <span style="${highlight}">${tentativas} ${palavraTentativa}!</span>`;
    exibirTextoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela(
        "p",
        `O número secreto é <span style="${highlight}">menor</span>`
      );
    } else {
      exibirTextoNaTela(
        "p",
        `O número secreto é <span style="${highlight}">maior</span>`
      );
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10 + 1);
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
