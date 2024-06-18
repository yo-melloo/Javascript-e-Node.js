const path = require("path");

//basename
console.log(path.basename(__filename));

//nome do arquivo
console.log(path.dirname(__filename));

//nome da extensão
console.log(path.extname(__filename));

//Converter em Objeto
console.log(path.parse(__filename));

//Unir caminhos
console.log(path.join(__dirname, "test", "test.html"));
