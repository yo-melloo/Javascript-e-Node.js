let mensagemDeBoasVindas = "Boas vindas ao App";
alert(mensagemDeBoasVindas);

let numeroSecreto = 4;
console.log(numeroSecreto);

let chute = prompt("Escolha entre 1 e 10:");

if (numeroSecreto == chute) {
  alert(`Isso aí! Você descobriu o número secreto (${numeroSecreto}).`);
} else {
  alert("Essa não, Você errou o numero secreto.");
}

/* 
É importante lembrar que, quando o projeto ficar disponível para todas as pessoas,
o que chamamos no contexto de software de ambiente de produção,
os comandos console.log devem ser removidos ou desabilitados,
pois podem causar problemas de desempenho e segurança.
*/
