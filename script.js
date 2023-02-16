function confirmarDados(nome) {
  let nomeCompleto = nome + " da Silva";

  let anoDeNascimento = getAnoNascimento();

  function getAnoNascimento() {
    const idade = 40;
    var ano = 2022 - idade;
    return ano;
  }

  function confirmarGeracao() {
    if (anoDeNascimento <= 1995) {
      return "Geracao X";
    } else {
      return "Millenium";
    }
  }
  let geracao = confirmarGeracao();

  console.log("Nome completo: " + nomeCompleto);
  console.log("Ano de nascimento: " + anoDeNascimento);
  console.log("Geração: " + geracao);
}
confirmarDados("Marcos");
