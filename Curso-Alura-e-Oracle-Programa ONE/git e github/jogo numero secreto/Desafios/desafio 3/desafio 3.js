//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calcIMC(peso, altura) {
  return peso / (altura * 2);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcFatorial(numero) {
  let result = numero;

  if (numero < 0) {
    return -1;
  } else if (numero == 0) {
    return 1;
  } else {
    while (numero > 1) {
      numero--;
      result *= numero;
    }
  }

  return result;
}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function calcDolar(real) {
  let dolarReal = 5.45;
  return real * dolarReal;
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcPerimetroRetangular(altura, largura) {
  let perimetro = `${2 * (altura + largura)}cm`;
  return perimetro;
}

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcPerimetroCircular(raio) {
  let pi = 3.14;
  let perimetro = 2 * (pi * raio);
  return perimetro;
}
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function calcTabuada(numero) {
  let mult = 1;
  let valor;
  let res = "";
  while (mult <= 10) {
    valor = numero * mult;
    res += `${numero} x ${mult} = ${valor} || `;
    mult++;
  }

  return res;
}
