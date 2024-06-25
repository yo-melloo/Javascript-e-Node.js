//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function botaoConsole() {
  console.log("Botão clicado!");
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function botaoAlert() {
  alert("Eu amo JS");
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function botaoPrompt() {
  let nome = prompt("Qual seu nome?");
  let cidade = prompt("Digite o nome de uma cidade");
  alert(`Oi ${nome}, Estive em ${cidade} e lembrei de você.`);
}
//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function botaoSoma() {
  let num1 = prompt("Digite um número: ");
  let num2 = prompt("Agora digite outro número para eu somar:");

  soma = Number(num1) + Number(num2);

  alert(`A soma entre ${num1} e ${num2} é ${soma}`);
}
