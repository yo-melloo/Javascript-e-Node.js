/* Código comentado por mim para fins de documentação */

/* Importando o Node.Express */
const express = require("express");
const app = express();

/* Porta de conexão HTTP */
const port = 8080;

/* Importando Mongoose (Biblioteca de aplicação do MongoDB para Objetos) */
const UserModel = require("../src/models/user.model");

/* Declarando trabalhar com JSON (boa parte) no código*/
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

/* Declarando uma função MIDDELWARE - Essa função vai ser executada antes de qualquer request */
app.use((req, res, next) => {
  console.log("----------");
  console.log(`Request Method: "${req.method}"`);
  console.log(`Content Type: "${req.headers["content-type"]}"`);
  console.log(new Date());
  console.log("----------");

  next();
});

app.get("/view/users", async (req, res) => {
  const users = await UserModel.find({});
  res.render("index", { users });
});

/* Criando a página inicial do servidor */
app.get("/home", (req, res) => {
  res.status(200).send('<h1 style="color: green">Olá Mundo</h1>');
});

/* Criando a página de usuários */
app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/* Criando a página de usuário único */
app.get("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await UserModel.findById(id);

    return res.status(200).json(user);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

/* Criando "envio" de dados para o servidor */
app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    send.status(500).send(error.message);
  }
});

/* Criando possibilidade de editar usuário */
app.patch("/users/:id", async (req, res) => {
  // "link/endpoint é o mesmo que exibe o usuário único"
  try {
    const id = req.params.id;
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

app.delete("/users/:id", async (requisicao, resposta) => {
  try {
    const id = requisicao.params.id;
    const usuario = await UserModel.findByIdAndDelete(id);

    resposta.status(200).json(usuario);
  } catch (erro) {
    resposta.status(500).send(erro.message);
  }
});

/* "Lançando" o servidor */
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/home`);
});
