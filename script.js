// Animation de navigation avec GSAP
document.addEventListener("DOMContentLoaded", () => {
    gsap.from("nav ul li", { opacity: 0, y: -10, stagger: 0.2, duration: 1 });
});

// Initialisation de Chart.js
const ctx = document.getElementById('energyChart').getContext('2d');
const energyChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Streaming', 'Gaming', 'Réseaux Sociaux'],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
});

// Chargement de l’animation Lottie
lottie.loadAnimation({
    container: document.getElementById('lottie-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'assets/lottie/animation.json'
});
