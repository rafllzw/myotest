function finalizarTeste() {
  // Oculta o conteúdo do teste e exibe o relatório
  document.getElementById('testeContainer').style.display = 'none';
  document.getElementById('relatorio').style.display = 'block';

  const totalLinhas = imagens.length; // Supondo que 'imagens' seja o array das linhas do teste
  const linhasLidas = linhaAtual; // Supondo que 'linhaAtual' seja o índice da última linha lida corretamente

  // Exibe o resumo do desempenho
  document.getElementById('resumoDesempenho').textContent = `Você leu corretamente ${linhasLidas} de ${totalLinhas} linhas.`;

  // Fornece recomendações com base no desempenho
  const recomendacoes = document.getElementById('recomendacoes');
  if (linhasLidas === totalLinhas) {
    recomendacoes.textContent = "Parabéns! Sua acuidade visual parece estar dentro dos padrões normais. Recomendamos manter exames regulares com um oftalmologista.";
  } else {
    recomendacoes.textContent = "Identificamos possíveis sinais de miopia. Sugerimos agendar uma consulta com um especialista para uma avaliação completa.";
  }

  // Gera o gráfico de desempenho
  const ctx = document.getElementById('graficoDesempenho').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Linhas Lidas', 'Linhas Restantes'],
      datasets: [{
        label: 'Desempenho',
        data: [linhasLidas, totalLinhas - linhasLidas],
        backgroundColor: ['#4CAF50', '#F44336']
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          precision: 0
        }
      }
    }
  });
}
