let atletas = [
  {
    nome: 'Cesar Abascal',
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: 'Fernando Puntel',
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: 'Daiane Jelinsky',
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: 'Bruno Castro',
    notas: [10, 10, 10, 9, 9.5],
  },
];

// calcula a média das notas desconsiderando a maior e menor nota
// apresenta informações ao usuário
function calcular(arr) {
  // iterando a matriz
  for (let i = 0; i < arr.length; i++) {
    const notas = arr[i].notas;

    // inicializando min/max/total
    let min = notas[0];
    let max = notas[0];
    let total = 0;

    // buscando valores min/max
    for (let j = 0; j < notas.length; j++) {
      const nota = notas[j];
      total += nota;

      // min
      if (nota < min) {
        min = nota;
      }

      // max
      if (nota > max) {
        max = nota;
      }
    }

    // calculo da media valida
    const media = (total - min - max) / (notas.length - 2);

    console.log(`Atleta: ${arr[i].nome}`);
    console.log(`Notas Obtidas: ${arr[i].notas.sort()}`);
    console.log(`Média válida: ${media}`);
    console.log();
  }
}

calcular(atletas);
