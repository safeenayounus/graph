const ctx = document.getElementById('linechart').getContext('2d');
const linechart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022'],
      datasets: [{
        label: ['Standerd veriable rate','what you pay'],
        data: [7,6,2.5,3,3,3,3,3,3,2,3,3,1.5,1.5,2,7],
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
