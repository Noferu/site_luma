
            const ctx = document.getElementById('co2Chart').getContext('2d');

            const data = {
                labels: [
                    'Streaming vidéo',
                    'Réseaux sociaux',
                    'Gaming',
                    'Musique enregistrée'
                ],
                datasets: [{
                    data: [300000, 262000, 37000, 2780], // Quantité en kilotonnes (kt)
                    backgroundColor: [
                        '#FC638D', // Rouge pour le streaming
            '#8D79EA', // Bleu pour les réseaux sociaux
            '#FFE978', // Jaune pour le gaming
            '#9EEACE'  // Vert pour la musique
                    ],
                    hoverOffset: 20
                }]
            };
            
            const options = {
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Émissions de CO₂ par secteur numérique (en kt/an)',
                        font: {
                            size: 18
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(tooltipItem) {
                                const value = tooltipItem.raw.toLocaleString('en-US');
                                return `${tooltipItem.label}: ${value} kt CO₂`;
                            }
                        }
                    }
                },
                responsive: true,
                layout: {
                    padding: 20
                },
            };
            
            const co2Chart = new Chart(ctx, {
                type: 'doughnut', // Camembert éclaté
                data: data,
                options: options
            });
            