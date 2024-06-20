let numero = document.getElementById("numero");

// criação da Promisse:
let promessa = new Promise((res, rej) => {
  /* Bloco de execução*/
  let resultado = false; // <---- Setar variável para verificação.
  let tempo = 3000;

  /* função assíncrona */
  setTimeout(() => {
    if (resultado) {
      res("Deu tudo certo!"); // se resultado = true, então o retorno será RESOLVE (res())
    } else {
      rej("Deu tudo errado!!"); // se resultado = false, então o retorno será REJECT (rej())
    }
  }, tempo);
});

// tratamento do retorno da promisse:
promessa
  .then((retorno) => {
    /* bloco de execução do Then (sucesso) */
    numero.innerHTML = retorno;
    numero.classList.remove("erro");
    numero.classList.add("ok");
  })
  .catch((retorno) => {
    /* bloco de execução do catch (falha) */
    numero.innerHTML = retorno;
    numero.classList.remove("ok");
    numero.classList.add("error");
  });

numero.innerHTML = "Processando...";
