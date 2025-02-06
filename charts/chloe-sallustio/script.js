const ctx = document.getElementById('consommationChart').getContext('2d');
const consommationChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Ordinateur fixe", "Console de jeux", "Oordinateur portable", "Tablette/martphone"],
        datasets: [{
            label: 'Puissance en veille (Kwh/an)',
            data: [123, 103, 22, 3],
            backgroundColor: ['#FC8563', '#FC638D', '#8D79EA', '#9EEACE', '#FFE978'],
            borderColor: ['#FC8563', '#FC638D', '#8D79EA', '#9EEACE', '#FFE978'],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true
            }
        }
    }
});