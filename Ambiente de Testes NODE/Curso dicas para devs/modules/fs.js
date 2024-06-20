const { error } = require("console");
const fs = require("fs");
const path = require("path");

// Criar uma pasta - Javascript Assíncrono
fs.mkdir(path.join(__dirname, "/teste"), (error) /* Callback */ => {
  if (error) {
    return console.log("Erro!", error);
  }
  console.log("pasta criada com sucesso!");
});

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "test.html"),
  "hello node! ",
  (error) => {
    if (error) {
      return console.log("erro!", error);
    }
    console.log("Arquivo criado com sucesso!");

    // Adicionar à um arquivo
    fs.appendFile(
      path.join(__dirname, "/teste", "test.html"),
      "Opá, eaí?",
      (error) => {
        if (error) {
          return console.log("erro!", error);
        }

        console.log("arquivo modificado com sucesso!");

        // Ler arquivo
        fs.readFile(
          path.join(__dirname, "/teste", "test.html"),
          "utf-8",
          (error, data) => {
            if (error) {
              return console.log("Erro", error);
            }
            console.log(data);
          }
        );
      }
    );
  }
);

//("Mello-notas:");
// Essa MEGA-ESTRUTURA AI EMCIMA, SE DEVE POR CONTA DE O NODE SER SINGLE-THREADED, NON-BLOCKING
// Nada impede o Node de "pular" uma função assíncrona em andamento para executar a próxima
// Em aplicações que as funções assíncronas dependem do retorno umas das outras
// O certo é aninhar/agrupar/tornar linear a execução do código
