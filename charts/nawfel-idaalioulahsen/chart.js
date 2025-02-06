const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            'Basse définition en WiFi',
            'Basse définition en 4G',
            'Haute définition en WiFi',
            'Haute définition en 4G',
            '4K en WiFi',
            '4K en 4G'
        ],
        datasets: [{
            label: 'Émissions de CO₂e (kg) pour 7 heures par semaine',
            data: [0.05, 0.13, 0.2, 0.52, 0.46, 1.22],
            backgroundColor: [
                'rgba(121, 234, 197, 0.7)', // Basse déf WiFi
                'rgba(252, 133, 99, 0.7)', // Basse déf 4G
                'rgba(141, 121, 234, 0.7)', // Haute déf WiFi
                'rgba(252, 99, 141, 0.7)', // Haute déf 4G
                'rgba(255, 233, 120, 0.7)', // 4K WiFi
                'rgba(218, 0, 0, 0.7)' // 4K 4G
            ],
            borderColor: [
                'rgba(121, 234, 197, 1)',
                'rgba(252, 133, 99, 1)',
                'rgba(141, 121, 234, 1)',
                'rgba(252, 99, 141, 1)',
                'rgba(255, 233, 120, 1)',
                'rgba(218, 0, 0, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.raw} kg CO₂e`;
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Émissions de CO₂e (kg)'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Type de consommation'
                }
            }
        }
    }
});
