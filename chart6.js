const ctx6 = document.getElementById('pie1').getContext('2d');
const pie1 = new Chart(ctx6, {
    type: 'pie',
    data: {
      labels: ['interest paid', 'capital repaid'],
        datasets: [{
            label: 'term of mortgage in years',
        data: [25,30],
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
