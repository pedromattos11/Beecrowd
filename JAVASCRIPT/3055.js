function mediaNotas(nota1, nota2) {
    return (nota1 + nota2) / 2;
  }
  
  function notaNaoSaber(nota1, media) {
    return 2 * media - nota1;
  }
  
  function main() {
    nota1 = parseInt(input());
    media = parseInt(input());
    nota2 = notaNaoSaber(nota1, media);
    console.log(nota2);
  }
  
  if (typeof main === "function") {
    main();
  }  