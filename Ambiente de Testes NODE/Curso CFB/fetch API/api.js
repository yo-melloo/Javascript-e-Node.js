const endpoint =
  "https://2d5fce6f-d592-43f6-b91e-7350be452e17-00-7hrernewnww5.spock.replit.dev/";

fetch(endpoint)
  .then((res) => res.json())
  .then((dados) => {
    dadosGlobal = dados;
    console.log(dados);
    console.log(`Essa resposta é do tipo: ${typeof dados}`);
  });

/* CORREÇÃO DO CHATGPT:
const endpoint = "https://2d5fce6f-d592-43f6-b91e-7350be452e17-00-7hrernewnww5.spock.replit.dev/";

fetch(endpoint)
  .then((res) => res.text())
  .then((dados) => {
    console.log(dados);
  });
  .catch((error) => {
    console.error('Erro ao buscar os dados:', error);
  });

*/
