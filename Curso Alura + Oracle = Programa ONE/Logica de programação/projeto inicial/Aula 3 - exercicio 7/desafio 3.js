//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero = Number(
  prompt("Insira um número para começar a contagem regressiva:")
);

while (true) {
  if (numero != 0) {
    while (numero >= 0) {
      console.log(numero);
      numero--;
    }
    break;
  } else {
    while (numero == 0) {
      numero = prompt("O número precisa se maior (ou menor) que zero.");
    }
  }
}
