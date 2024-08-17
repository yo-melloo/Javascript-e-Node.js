/* 
Você é uma pessoa recém-chegada à equipe de desenvolvimento do Jornada Milhas, um site de compra de pacotes de viagens para os principais destinos do mundo.
Como primeira tarefa, sua liderança pediu para que você corrigisse um bug que tem acontecido quando uma pessoa cliente do site tenta utilizar suas milhas do cartão de crédito para obter desconto nos pacotes de viagem. Para isso, foi apresentado o seguinte código:
*/
let quantidadeMilhas = 5001;
let porcentagemDesconto = 0;

if (quantidadeMilhas >= 30000) {
  porcentagemDesconto += 20;
} else {
  if (quantidadeMilhas > 5000) {
    porcentagemDesconto += 10;
  } else {
    porcentagemDesconto = 0;
  }
}

console.log(`
    Você tem ${quantidadeMilhas} de milhas, seu desconto nos nossos produtos é de ${porcentagemDesconto}%!
    `);
