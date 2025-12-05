🏋️‍♀️ Générateur de Programme Sportif Personnalisé
🎯 Aperçu du Projet

Ce projet est une application web simple de type quiz ("Questionnaire") conçue pour aider l'utilisateur à déterminer son profil sportif et son niveau d'engagement afin de lui proposer un programme d'exercices de renforcement musculaire fonctionnel personnalisé.

L'application analyse les réponses de l'utilisateur sur sa fréquence de pratique, son environnement préféré, son objectif principal, et son style d'effort pour recommander :

    Son niveau de pratique sportive (bas, moyen, élevé).

    Les 5 types de sports qui correspondent le mieux à son profil.

    Un conseil d'entraînement (nombre de séries/répétitions/temps) adapté aux sports préférés et à son niveau d'investissement.

✨ Fonctionnalités

    Quiz Interactif : 12 questions à choix multiples pour cerner le profil sportif.

    Analyse de Profil : Calcul du niveau sportif et identification des types de sports recommandés.

    Recommandation d'Exercices : Génération d'un programme de renforcement (type, séries, répétitions) basé sur le sport préféré et l'objectif d'investissement.

    Interface Utilisateur Simple : Design clair et minimaliste (grâce au CSS propre généré).

📂 Structure des Fichiers

Le projet est organisé autour des trois fichiers principaux suivants :

/
├── index.html          # La structure de la page web (HTML).
├── style.css           # La mise en forme et le style de l'interface (CSS).
└── script.js           # La logique du quiz, le calcul des résultats, et la génération du programme (JavaScript).

🛠️ Installation et Lancement

Ce projet est une application Front-End pure et ne nécessite pas de serveur web ni de base de données.

    Cloner ou Télécharger : Téléchargez ou clonez les trois fichiers (index.html, style.css, script.js) dans un même répertoire.

    Lancement : Ouvrez le fichier index.html dans n'importe quel navigateur web (Chrome, Firefox, Edge, etc.).

    Utilisation : Répondez aux questions et cliquez sur le bouton "Soumettre le Questionaire" pour afficher vos résultats et votre programme.

⚙️ Fonctionnement Technique du Quiz (script.js)

Le cœur de l'application est le fichier script.js.
1. Variables de Score

Le script utilise une liste principale nommée sportsList pour attribuer des points aux différents types de sports en fonction des réponses de l'utilisateur.
JavaScript

let sportsList = [
  ["Sports de raquette", 0],
  // ... autres sports ...
];

Chaque élément est un tableau [Nom du Sport, Score].
2. Calcul des Résultats (setResults function)

Cette fonction est déclenchée par le bouton "Soumettre".

    Q0 (Fréquence) et Q2 (Intensité) : Ces questions déterminent le niveau sportif global de l'utilisateur (sportLevel), qui influence ensuite le multiplierParExo (le nombre de répétitions/temps dans le programme).

        sportLevel < 2 → "bas" (multiplierParExo = 1)

        sportLevel < 4 → "moyen" (multiplierParExo = 1.5)

        sportLevel >= 4 → "élevé" (multiplierParExo = 2)

    Q9, Q10, Q11 (Objectifs) : Ces questions accumulent des points dans la variable objectif, qui détermine le niveau d'investissement souhaité, et donc le multiplierNbExo (le nombre de séries/exercices).

        objectif < 8 → Investissement faible (multiplierNbExo = 1)

        objectif < 11 → Investissement moyen (multiplierNbExo = 2)

        objectif >= 11 → Investissement énorme (multiplierNbExo = 3)

    Q1, Q3 à Q8 : Chaque réponse incrémente le score ([1]) des sports correspondants dans sportsList (ex: sportsList[0][1]++ pour les Sports de raquette).

3. Recommandation (Fonction donneConseil)

    La sportsList est triée par score (b[1] - a[1]).

    Les 5 sports ayant le score le plus élevé sont isolés (listeAime).

    La fonction donneConseil attribue à chaque sport une liste d'exercices de renforcement (ex: nbExoTriathlon = exosFonctionnelEndurance).

    La fonction realExo utilise les multiplicateurs calculés (multiplierNbExo et multiplierParExo) pour ajuster le nombre de séries et de répétitions, créant ainsi le programme final personnalisé.