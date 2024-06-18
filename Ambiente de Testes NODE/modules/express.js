const express = require("express");
const app = express();
const port = 8080;
const UserModel = require("../src/models/user.model");

app.use(express.json());

app.get("/home", (req, res) => {
  res.status(200).send('<h1 style="color: green">Olá Mundo</h1>');
});

app.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    send.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
