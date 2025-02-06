const tower = document.getElementById("tower");
const actionMessage = document.querySelector(".action-message");
const actionEmoji = document.querySelector(".action-emoji");

const stonesData = [
  {
    svg: "assets/svgs/building-blocks/adopte-le-mode-economie-d-energie.svg",
    message: "Chaque geste compte : active le mode économie d’énergie !",
    emoji: "💡"
  },
  {
    svg: "assets/svgs/building-blocks/choisis-des-appareils-reconditionnes.svg",
    message: "Un appareil reconditionné, c’est un déchet en moins !",
    emoji: "♻️"
  },
  {
    svg: "assets/svgs/building-blocks/diminue-le-temps-passe-en-ligne.svg",
    message: "Moins de temps en ligne, plus de temps pour soi.",
    emoji: "📴"
  },
  {
    svg: "assets/svgs/building-blocks/eteins-tes-appareils-inutilises.svg",
    message: "Éteindre, c’est éviter une consommation fantôme inutile.",
    emoji: "🔌"
  },
  {
    svg: "assets/svgs/building-blocks/favorise-les-loisirs-numeriques-hors-ligne.svg",
    message: "Lire un livre ? Une alternative sans consommation d’énergie.",
    emoji: "📖"
  },
  {
    svg: "assets/svgs/building-blocks/pre-telecharge-des-contenus.svg",
    message: "Pré-télécharger, c’est réduire l’usage des serveurs en continu.",
    emoji: "📥"
  },
  {
    svg: "assets/svgs/building-blocks/recycle-tes-appareils-anciens.svg",
    message: "Recycler, c’est prolonger la durée de vie de nos ressources.",
    emoji: "🔄"
  },
  {
    svg: "assets/svgs/building-blocks/reduis-la-qualite-de-streaming.svg",
    message: "Regarder en HD suffit souvent, inutile de forcer la 4K.",
    emoji: "🎥"
  },
  {
    svg: "assets/svgs/building-blocks/utilise-le-wi-fi-plutot-que-la-4g.svg",
    message: "Le Wi-Fi consomme jusqu'à 5x moins d’énergie que la 4G.",
    emoji: "📶"
  }
];

function playRandomSound() {
  const soundPaths = [
    "assets/sounds/break-stone-1.mp3",
    "assets/sounds/break-stone-3.mp3",
    "assets/sounds/break-stone-4.mp3"
  ];
  const randomIndex = Math.floor(Math.random() * soundPaths.length);
  new Audio(soundPaths[randomIndex]).play();
}

stonesData.forEach(({ svg, message, emoji }) => {
  const stone = document.createElement("div");
  stone.classList.add("stone");
  stone.dataset.message = message;
  stone.dataset.emoji = emoji;

  const img = document.createElement("img");
  img.src = svg;
  img.alt = `Pierre représentant l'action : ${message}`;
  stone.appendChild(img);

  const offset = Math.random() * 30 - 15;
  stone.style.transform = `translateX(${offset}px)`;

  tower.appendChild(stone);
});

tower.addEventListener("click", (event) => {
  const stone = event.target.closest(".stone");
  if (stone) {
    playRandomSound();

    stone.classList.add("removed");
    stone.addEventListener("animationend", () => {
      tower.removeChild(stone);


      if (tower.childElementCount === 0) {
        actionMessage.classList.add("fade-out");
        actionEmoji.classList.add("fade-out");

        setTimeout(() => {
          actionMessage.textContent = "Bravo ! Tu as adopté une consommation plus responsable.";
          actionEmoji.textContent = "🎉";

          actionMessage.classList.remove("fade-out");
          actionEmoji.classList.remove("fade-out");
        }, 300);
      } else {

        actionMessage.classList.add("fade-out");
        actionEmoji.classList.add("fade-out");

        setTimeout(() => {
          actionMessage.textContent = stone.dataset.message;
          actionEmoji.textContent = stone.dataset.emoji;

          actionMessage.classList.remove("fade-out");
          actionEmoji.classList.remove("fade-out");
        }, 300);
      }
    });
  }
});

