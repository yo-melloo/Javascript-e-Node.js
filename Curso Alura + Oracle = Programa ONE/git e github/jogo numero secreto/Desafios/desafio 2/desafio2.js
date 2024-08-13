//Criar uma função que exibe "Olá, mundo!" no console.
function olaMundo() {
  return "Olá, Mundo!";
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaUsuario() {
  let name = prompt("Digite um nome");
  return `Olá ${name}`;
}

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function numeroDobro() {
  alert("Descobrir o dobro de um número");
  let number = Number(prompt("Digite um número"));
  return `o dobro de ${number} é ${number * 2}`;
}

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media() {
  alert("descobrir a Média de 3 valores");
  let num1 = Number(prompt("Número 1"));
  let num2 = Number(prompt("Número 2"));
  let num3 = Number(prompt("Número 3"));

  let media = (num1 + num2 + num3) / 3;
  return `a Média entre ${num1} + ${num2} + ${num3} é: ${media}`;
}

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function numeroMaior() {
  alert("Número Maior");
  let num1 = Number(prompt("Número 1"));
  let num2 = Number(prompt("Número 2"));

  if (num1 > num2) {
    return `o número maior é ${num1}`;
  } else {
    return `o número maior é ${num2}`;
  }
}

// - ADICIONADO POR MIM -
function numeroMenor() {
  alert("Número Menor");
  let num1 = Number(prompt("Número 1"));
  let num2 = Number(prompt("Número 2"));

  if (num1 < num2) {
    return `o número menor é ${num1}`;
  } else {
    return `o número menor é ${num2}`;
  }
}

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function raizQuadrada() {
  let num = prompt("Raíz quadrada, digite um número:");
  return `A raíz quadrada de ${num} é: ${num * num}`;
}
