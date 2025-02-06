# **📘 README.md - Projet LUMA**  

## 🎯 **Présentation**  
LUMA est un site **one-page interactif** qui sensibilise à la **sobriété énergétique des loisirs numériques**. Il combine **visualisations de données**, **animations immersives**, et **design engageant** pour informer et inciter aux bonnes pratiques.

## 📁 **Structure du projet**  
```
📦 site_luma
├── index.html       # Page principale (HTML, nécessite ouverture via serveur local)
├── README.md        # Documentation du projet
│
├── assets/           # Contenus multimédias
│   ├── fonts/        # Polices utilisées (Gulfs Display)
│   ├── icons/        # Icônes du site (favicon, etc.)
│   ├── images/       # Illustrations et visuels
│   ├── sounds/       # Effets sonores
│   ├── svgs/         # Graphiques vectoriels
│   ├── videos/       # Vidéos animées et motion design
│
├── charts/           # Graphiques en JavaScript (JS inclus dans chaque dossier)
│   ├── chloe-sallustio/
│   ├── florian-mussard/
│   ├── manel-hamdaoui/
│   ├── marco-schramm/
│   └── nawfel-idaalioulahsen/
│       ├── chart.js
│       ├── index.html  # Fichier HTML pour voir les graphiques en JS
│
├── css/              # Styles du site
│   ├── imports.css   # Importation des polices et variables CSS
│   ├── reset.css     # Réinitialisation des styles
│   ├── style.css     # Styles principaux du site
│
└── js/               # Scripts JavaScript
    ├── building-blocks.js  # Animations interactives
    ├── script.js           # Script principal
```

## 🔧 **Technologies utilisées**  
- **HTML5, CSS3, JavaScript**  
- **Chart.js** → Création des graphiques dynamiques  

> **Note :**  
> Les fichiers **index.html** dans les dossiers **charts/** contiennent les graphiques en **JavaScript**.  
> Le **index.html** à la racine **ne fonctionne pas directement** en double-cliquant dessus. Il doit être ouvert via un **serveur local**.

## 🛠️ **Installation et exécution**  
1️⃣ **Cloner le projet**  
   ```bash
   git clone https://github.com/votre-repo/site-luma.git
   cd site-luma
   ```
2️⃣ **Lancer un serveur local** (ex : avec Python ou VSCode) :  
   ```bash
   # Si Python est installé :
   python -m http.server
   # Ouvrez ensuite le site sur http://127.0.0.1:8000
   ```

3️⃣ **Pour voir les graphiques**, ouvrir les fichiers **index.html** dans les sous-dossiers de `charts/`.

## 📜 **Crédits**  
Projet réalisé dans le cadre de la **SAÉ 303 - Université de Strasbourg**.  
**Équipe :**  
- **Nawfel IDA ALI OU LAHSEN - Conception et développement**  
- **Manel HAMDAOUI**  
- **Florian MUSSARD**  
- **Chloé SALLUSTIO**  
- **Marco SCHRAMM**  

## 📩 **Contact**  
📧 nawfel.idaali.pro@gmail.com  
🌐 [Portfolio](ida.etu.mmi-unistra.fr)  