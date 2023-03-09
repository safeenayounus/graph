const ctx8 = document.getElementById('pie3').getContext('2d');
const pie3 = new Chart(ctx8, {
    type: 'pie',
    data: {
      labels: ['interest paid','capital repaid'],
        datasets: [{
            label: 'term of mortgage in years',
        data: [75,25],
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
