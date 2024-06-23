//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let numero = Number(
  prompt("Insira um número para começar a contagem progressiva:")
);
let contador = 0;

while (true) {
  if (numero != contador) {
    while (contador <= numero) {
      console.log(contador);
      contador++;
    }
    break;
  } else {
    numero = Number(
      prompt("O número precisa se maior (ou menor) que zero (ou vazio).")
    );
  }
}
