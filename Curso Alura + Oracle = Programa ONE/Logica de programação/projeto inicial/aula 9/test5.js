// mude os valores se quiser:
let xp = 100;
let level = 1;

// verifica o XP:
if (xp >= 100) {
  level += 1; // sobe de level
  console.log(
    `Parabens! Você subiu de nível.\n(level ${level - 1} -> level ${level})`
  );
} else {
  console.log("Ops, você ainda não pode subir de nivel.");
}
