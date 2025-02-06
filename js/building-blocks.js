const tower = document.getElementById("tower");
const co2Reduction = document.getElementById("co2-reduction");
const actionMessage = document.querySelector(".action-message");

const stonesData = [
  {
    reduction: 0.12,
    svg: "assets/svgs/building-blocks/adopte-le-mode-economie-d-energie.svg",
    message: "Adopter le mode économie d'énergie réduit la consommation inutile de tes appareils."
  },
  {
    reduction: 0.2,
    svg: "assets/svgs/building-blocks/choisis-des-appareils-reconditionnes.svg",
    message: "Choisir des appareils reconditionnés diminue l'impact écologique lié à la fabrication."
  },
  {
    reduction: 0.1,
    svg: "assets/svgs/building-blocks/diminue-le-temps-passe-en-ligne.svg",
    message: "Réduire le temps passé en ligne limite l'énergie consommée par les serveurs."
  },
  {
    reduction: 0.15,
    svg: "assets/svgs/building-blocks/eteins-tes-appareils-inutilises.svg",
    message: "Éteindre tes appareils inutilisés évite un gaspillage énergétique important."
  },
  {
    reduction: 0.18,
    svg: "assets/svgs/building-blocks/favorise-les-loisirs-numeriques-hors-ligne.svg",
    message: "Favoriser les loisirs numériques hors ligne réduit ta dépendance à l'énergie des datacenters."
  },
  {
    reduction: 0.25,
    svg: "assets/svgs/building-blocks/pre-telecharge-des-contenus.svg",
    message: "Pré-télécharger des contenus limite l'usage continu de bande passante."
  },
  {
    reduction: 0.05,
    svg: "assets/svgs/building-blocks/prends-conscience-de-ton-impact.svg",
    message: "Prendre conscience de ton impact est la première étape vers le changement."
  },
  {
    reduction: 0.22,
    svg: "assets/svgs/building-blocks/recycle-tes-appareils-anciens.svg",
    message: "Recycler tes appareils anciens prolonge leur durée de vie et réduit les déchets électroniques."
  },
  {
    reduction: 0.14,
    svg: "assets/svgs/building-blocks/reduis-la-qualite-de-streaming.svg",
    message: "Réduire la qualité de streaming limite la consommation énergétique inutile."
  },
  {
    reduction: 0.08,
    svg: "assets/svgs/building-blocks/reflechis-avant-d-acheter-de-nouvelles-technologies.svg",
    message: "Réfléchir avant d'acheter de nouvelles technologies évite les achats inutiles et réduit l'impact écologique."
  },
  {
    reduction: 0.3,
    svg: "assets/svgs/building-blocks/utilise-le-wi-fi-plutot-que-la-4g.svg",
    message: "Utiliser le Wi-Fi plutôt que la 4G consomme beaucoup moins d'énergie."
  },
  {
    reduction: 0.07,
    svg: "assets/svgs/building-blocks/utiliser-des-plateformes-eco-responsables.svg",
    message: "Utiliser des plateformes éco-responsables encourage des pratiques plus durables."
  }
];

const totalReduction = stonesData.reduce((total, stone) => total + stone.reduction, 0);
let currentReduction = totalReduction;

co2Reduction.textContent = currentReduction.toFixed(2);

const soundPaths = [
  "assets/sounds/break-stone-1.mp3",
  "assets/sounds/break-stone-2.mp3",
  "assets/sounds/break-stone-3.mp3",
  "assets/sounds/break-stone-4.mp3",
];

function playRandomSound() {
  const randomIndex = Math.floor(Math.random() * soundPaths.length);
  const sound = new Audio(soundPaths[randomIndex]);
  sound.play();
}

stonesData.forEach(({ reduction, svg, message }) => {
  const stone = document.createElement("div");
  stone.classList.add("stone");
  stone.dataset.reduction = reduction;
  stone.dataset.message = message;

  const img = document.createElement("img");
  img.src = svg;
  img.alt = `Pierre représentant l'action : ${message}`;
  stone.appendChild(img);

  const offset = Math.random() * 30 - 15;
  stone.style.transform = `translateX(${offset}px)`;

  tower.appendChild(stone);
});

function showFlash() {
  const flash = document.createElement("div");
  flash.classList.add("flash");
  document.body.appendChild(flash);

  flash.addEventListener("animationend", () => flash.remove());
}

function shakeTower() {
  tower.classList.add("shaking");
  setTimeout(() => {
    tower.classList.remove("shaking");
  }, 300);
}

tower.addEventListener("click", (event) => {
  const stone = event.target.closest(".stone");
  if (stone) {
    playRandomSound();
    showFlash();
    shakeTower();

    stone.classList.add("removed");
    stone.addEventListener("animationend", () => {
      tower.removeChild(stone);

      currentReduction -= parseFloat(stone.dataset.reduction);
      co2Reduction.textContent = currentReduction.toFixed(2);

      actionMessage.textContent = stone.dataset.message;

      if (tower.childElementCount === 0) {
        actionMessage.textContent =
          "Félicitations ! Tu as atteint une consommation neutre en carbone !";
      }
    });
  }
});
