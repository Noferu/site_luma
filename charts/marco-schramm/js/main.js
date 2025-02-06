const ctx = document.getElementById('myChart');


const chart = new Chart(ctx,  {
    type: 'bar',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
            display: true,
            text: 'Poids entre  téléphone neuf et téléphone reconditionné'
          },
        scales: {
            y: {
                beginAtZero: true
            }
        }
      }
    },
  });