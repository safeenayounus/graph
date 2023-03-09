const ctx7 = document.getElementById('pie2').getContext('2d');
const pie2 = new Chart(ctx7, {
    type: 'pie',
    data: {
      labels: ['interest paid'],
        datasets: [{
            label: 'term of mortgage in years',
        data: [100],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
