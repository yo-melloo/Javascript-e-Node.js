async function pegaDados() {
  const a = await fetch("https://api.github.com/users/yo-melloo");
  const resultadoConvertido = await a.json();
  //console.log("resultado: ", a);
  console.log(resultadoConvertido);
}

pegaDados();
