const http = require("http");
const port = 8080;
const server = http.createServer((req, res) => {
  if (req.url === "/home") {
    res.end("<h1> homepage </h1>");
    res.writeHead(200 /*Requisição OK*/, { "Content-Type": "text/html" });
  }
  if (req.url === "/users") {
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
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  }
});

server.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
