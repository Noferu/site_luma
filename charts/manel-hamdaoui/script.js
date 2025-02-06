const ctx = document.getElementById('energyChart').getContext('2d');

const energyChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [2015, 2020, 2025],
        datasets: [
            {
                label: 'Estimation 2025',
                data: [1.8, 3.5, 5], // Estimation
                borderColor: 'blue',
                backgroundColor: 'rgba(0, 0, 255, 0.2)',
                fill: true,
                tension: 0.3
            },
            {
                label: 'Pire Scénario 2025',
                data: [1.8, 4, 7.5], // Pire scénario
                borderColor: 'red',
                backgroundColor: 'rgba(255, 0, 0, 0.2)',
                fill: true,
                tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Année'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Consommation énergétique (%)'
                },
                beginAtZero: true,
                suggestedMax: 10
            }
        }
    }
});
