const express = require("express");
const app = express();
const port = 8080;

app.get("/home", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Olá Mundo!</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "Jhon Doe",
      email: "jhon@doe.com",
    },
    {
      name: "Jane Doe",
      email: "jane.doe@gmail.com",
    },
  ];

  res.contentType("application/json");
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Rodando com express na porta ${port}`);
});
