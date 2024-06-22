/* 1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas. */
let username = prompt("Olá, como devo lhe chamar?\nSeu nome:");
let welcomeText = `Bem-vindo ao nosso site ${username}`;
console.log(welcomeText);
//alert(welcomeText);

/* 2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador. */
//let nome = "Gustavo";
console.log(`Boas-vindas ${username}!`);

/* 3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" . */
alert(`Olá ${username}!`);

/* 4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador. */
let programmingLanguage = prompt(
  "Qual linguagem de programação você mais gosta?"
);

/* 5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console. */
valor1 = 4;
valor2 = 2;
resultado = valor1 + valor2;
console.log(`A soma entre ${valor1} e ${valor2}, é ${resultado}`);

/*Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console. */
valor1 = 7;
valor2 = 1;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2}, é ${resultado}`);

/* 6. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console. */
let idade = prompt("Qual a sua idade?");

if (idade >= 18) {
  console.log(`${username} é maior de idade.`);
} else {
  console.log(`${username}é menor de idade.`);
}

/* 7. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem. */
let num = prompt(
  "Teste minha aplicação\nDigite um número e eu verificarei se ele é positivo ou negativo:"
);

if (num >= 0) {
  console.log(`O numero digitado ( ${num} ) é positivo`);
} else {
  console.log(`O numero digitado ( ${num} ) é negativo`);
}

/* 8. Use um loop while para imprimir os números de 1 a 10 no console. */
let zeroDez = 0;
while (zeroDez <= 10) {
  console.log(`contador: ${zeroDez}`);
  zeroDez++;
}

/* 9. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console. */
let nota = 5;
if (nota >= 7) {
  console.log(`nota: ${nota}. Aprovado!`);
} else {
  console.log(`nota: ${nota}. Reprovado!`);
}

/* 10. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console. */
console.log(`exibindo número aleatório: ${Math.random() * 7}`);

/* Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console. */
console.log(`exibindo número aleatório entre 1 e 100: ${Math.random() * 10}`);

/*Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console. */
console.log(
  `exibindo número aleatório entre 1 e 1000: ${Math.random() * 1000}`
);
