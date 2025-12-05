document.addEventListener('DOMContentLoaded', () => {
  // 1. Récupérer les éléments par leur ID
  const bouton = document.getElementById('monBouton');
  const message = document.getElementById('message');
  
  // 2. Définir la fonction qui sera appelée au clic
  function gererClic() {
    message.textContent = 'Le bouton a été cliqué ! Super !';
    bouton.style.backgroundColor = 'red';
  }
  
  // 3. Ajouter un écouteur d'événement au bouton
  bouton.addEventListener('click', gererClic);
  
  let sportsList = [
    ["Sports de raquette", 0],
    ["Triathlon", 0],
    ["Athlétisme", 0],
    ["Sports de combat", 0],
    ["Cross training", 0],
    ["Course à pied", 0],
    ["Vélo", 0],
    ["Danses", 0],
    ["Sports de précision", 0],
    ["Fitness / Bien être", 0],
    ["Football", 0],
    ["Rugby", 0],
    ["Basketball", 0],
    ["Arts martiaux", 0],
    ["Musculation", 0],
    ["Sports d'eau", 0],
    ["Escalade", 0],
    ["Sports de glisse", 0],
    ["Running", 0],
    ["Sports d'hiver", 0],
    ["Sports de planche", 0],
    ["Ultimate", 0],
    ["Voile", 0],
  ];
  
  let sportLevel = 0;
  sportsList[1][1]++;
  console.log(sportsList);
  
  
  const myQuestions = [
    {
      question: "Combien de fois par semaine fait tu du sport",
      answers: {
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
        f: 5,
        g: 6,
        h: 7,
      },
    },
    {
      question: "Apprécie tu passer par un objet pour faire du sport(par ex raquette ou planche à voile) ou ne dépendre que de ton corps(musculation, football etc..)",
      answers: {
        a: "Oui",
        b: "Non"
      },
    },
    {
      question: "Quelle intensité mets tu dans l'effort",
      answers: {
        a: "Faible",
        b: "Moyen Faible",
        c: "Moyen",
        d: "Moyen Élevé",
        e: "Élevé"
      },
    },
    {
      question: "Quel environnement de pratique préférez-vous majoritairement ?",
      answers: {
        a: "Intérieur (Salle de sport, studio, maison)",
        b: "Extérieur (Nature, parc, piste)",
        c: "Aquatique (Piscine, lac, mer)",
        d: "Je pratique indifféremment en intérieur et en extérieur"
      }
    },
    {
      question: "Quel type d'effort physique préférez-vous généralement ?",
      answers: {
        a: "L'endurance de longue durée (ex: Course à pied, Cyclisme, Natation)",
        b: "La force et la puissance (ex: Musculation, Sports de combat)",
        c: "L'agilité et la coordination (ex: Sports de raquette, Danses)",
        d: "La précision et la concentration (ex: Sports de précision, Yoga)"
      }
    },
    {
      question: "Préférez-vous une activité :",
      answers: {
        a: "Solitaire (entraînement individuel, rythme personnel)",
        b: "En équipe (interaction, coopération, sports collectifs)",
        c: "En duel (adversaire direct, sports de combat ou de raquette)",
        d: "En groupe (cours collectifs, ambiance, sans compétition directe)"
      }
    },
    {
      question: "Quel est votre niveau d'appréciation du contact physique dans le sport ?",
      answers: {
        a: "J'adore les sports avec contact (ex: Rugby, Sports de combat)",
        b: "J'accepte un contact indirect ou occasionnel (ex: Basketball, Football)",
        c: "Je préfère les sports sans aucun contact physique (ex: Athlétisme, Natation)"
      }
    },
    {
      question: "Quel type d'environnement vous attire le plus pour une activité régulière ?",
      answers: {
        a: "La montagne/nature verticale (ex: Escalade, Randonnée)",
        b: "L'eau/le nautisme (ex: Sports d'eau, Voile, Sports de planche)",
        c: "La glisse (ex: Sports de glisse, Sports d'hiver)",
        d: "Le sol stable/la salle (ex: Arts martiaux, Fitness)"
      }
    },
    {
      question: "Quel type de matériel sportif préférez-vous utiliser ?",
      answers: {
        a: "Mon corps seul (ex: Running, Cross training, Yoga)",
        b: "Des accessoires de contrôle (ex: Raquettes, Ballons)",
        c: "De la machinerie ou des charges lourdes (ex: Musculation, Vélo)",
        d: "De l'équipement technique de glisse (ex: Ski, Planche, Voile)"
      }
    },
    {
      question: "Quel est votre objectif principal en faisant du sport ?",
      answers: {
        a: "Améliorer ma performance (vitesse, force, record personnel) ou gagner des compétitions.",
        b: "Maintenir ou améliorer ma santé globale et mon bien-être (énergie, réduction du stress).",
        c: "Perdre du poids, changer ma silhouette ou augmenter ma masse musculaire.",
        d: "Avoir une activité sociale, renforcer les liens d'équipe ou rencontrer des gens."
      }
    },
    {
      question: "Comment mesurez-vous le succès de votre investissement sportif ?",
      answers: {
        a: "Par les chiffres (poids soulevé, distance parcourue, temps record).",
        b: "Par mon niveau d'énergie, ma qualité de sommeil et mon moral.",
        c: "Par mon apparence dans le miroir ou la taille de mes vêtements.",
        d: "Par le plaisir que j'ai à partager l'activité avec d'autres ou l'assiduité du groupe."
      }
    },
    {
      question: "Quelle est l'horizon de temps idéal pour atteindre votre objectif le plus important ?",
      answers: {
        a: "Court terme (moins de 3 mois, pour un événement précis).",
        b: "Moyen terme (3 à 12 mois, pour une transformation significative).",
        c: "Long terme (plus d'un an, pour un changement de mode de vie profond)."
      }
    }
  ];
  
  function buildQuiz() {
    const output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
      for (let letter in currentQuestion.answers) {
        answers.push(
          `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} : ${currentQuestion.answers[letter]}
            </label>`
        );
      }
      output.push(
        `<div class="question">${currentQuestion.question}</div>
          <div class="answers">${answers.join('')}</div>`
      );
    });
    document.getElementById('questions').innerHTML = output.join('');
  }
  
  function setResults() {
    const questionsContainer = document.getElementById('questions');
    if (!questionsContainer) return;
    
    const answerContainers = questionsContainer.querySelectorAll('.answers');
    
    for (let i = 0; i < sportsList.length; i++) {
      sportsList[i][1] = 0;
    }
    let localSportLevel = 0;
    
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value; // Ex: 'a', 'b'
      let objectif = 0;
      if (!userAnswer) return; // Si aucune réponse n'est cochée, passe à la question suivante
      
      const answerText = currentQuestion.answers[userAnswer];
      
      // --- Q1 : Fréquence (Index 0) ---
      if (questionNumber === 0) {
        // La valeur est le chiffre (0 à 7)
        const frequency = currentQuestion.answers[userAnswer];
        localSportLevel = Number(frequency); // Utilisation de la variable locale
        document.getElementById('niveau').innerHTML = `Tu as un niveau ${localSportLevel} en sport`;
      }
      
      // --- Q2 : Objet vs Corps (Index 1) ---
      else if (questionNumber === 1) {
        if (answerText === "Oui") { // Apprécie les objets
          sportsList[0][1]++;  // Sports de raquette
          sportsList[10][1]++; // Football (ballon)
          sportsList[12][1]++; // Basketball (ballon)
          sportsList[15][1]++; // Sports d'eau
          sportsList[20][1]++; // Sports de planche
          sportsList[22][1]++; // Voile
        } else if (answerText === "Non") { // Préfère le corps
          sportsList[4][1]++;  // Cross training
          sportsList[5][1]++;  // Course à pied
          sportsList[14][1]++; // Musculation
          sportsList[18][1]++; // Running
        }
      }
      
      // --- Q3 : Intensité (Index 2) ---
      else if (questionNumber === 2) {
        if (userAnswer === 'b') { // Moyen Faible
          localSportLevel++;
        } else if (userAnswer === 'c') { // Moyen
          localSportLevel += 2;
        } else if (userAnswer === 'd') { // Moyen Élevé
          localSportLevel += 3;
        } else if (userAnswer === 'e') { // Élevé
          localSportLevel += 4;
        }
      }
      
      // --- Q4 : Environnement (Index 3) ---
      else if (questionNumber === 3) {
        if (userAnswer === 'a') { // Intérieur
          sportsList[0][1]++; // Sports de raquette (Indoor)
          sportsList[9][1]++; // Fitness / Bien être
          sportsList[13][1]++; // Arts martiaux
          sportsList[14][1]++; // Musculation
        } else if (userAnswer === 'b') { // Extérieur
          sportsList[1][1]++; // Triathlon
          sportsList[5][1]++; // Course à pied
          sportsList[16][1]++; // Escalade
          sportsList[18][1]++; // Running
        } else if (userAnswer === 'c') { // Aquatique
          sportsList[15][1]++; // Sports d'eau
          sportsList[20][1]++; // Sports de planche
          sportsList[22][1]++; // Voile
        }
      }
      
      // --- Q5 : Préférence d'Effort (Index 4) ---
      else if (questionNumber === 4) {
        if (userAnswer === 'a') { // Endurance
          sportsList[1][1]++; sportsList[5][1]++; sportsList[6][1]++; sportsList[15][1]++; sportsList[18][1]++;
        } else if (userAnswer === 'b') { // Force et puissance
          sportsList[3][1]++; sportsList[4][1]++; sportsList[14][1]++;
        } else if (userAnswer === 'c') { // Agilité et coordination
          sportsList[0][1]++; sportsList[7][1]++; sportsList[12][1]++; sportsList[21][1]++;
        } else if (userAnswer === 'd') { // Précision et concentration
          sportsList[8][1]++; sportsList[9][1]++;
        }
      }
      
      // --- Q6 : Cadre Social (Index 5) ---
      else if (questionNumber === 5) {
        if (userAnswer === 'a') { // Solitaire
          sportsList[5][1]++; sportsList[14][1]++; sportsList[18][1]++;
        } else if (userAnswer === 'b') { // En équipe
          sportsList[10][1]++; sportsList[11][1]++; sportsList[12][1]++; sportsList[21][1]++;
        } else if (userAnswer === 'c') { // En duel
          sportsList[0][1]++; sportsList[3][1]++;
        } else if (userAnswer === 'd') { // En groupe
          sportsList[4][1]++; sportsList[7][1]++; sportsList[9][1]++;
        }
      }
      // --- Q7 : Contact Physique (Index 6) ---
      else if (questionNumber === 6) {
        if (userAnswer === 'a') { // J'adore les sports avec contact
          sportsList[3][1]++;  // Sports de combat
          sportsList[11][1]++; // Rugby
        } else if (userAnswer === 'b') { // J'accepte un contact indirect ou occasionnel
          sportsList[10][1]++; // Football
          sportsList[12][1]++; // Basketball
        } else if (userAnswer === 'c') { // Je préfère les sports sans aucun contact physique
          // Les sports sans contact sont nombreux, on cible les plus évidents
          sportsList[2][1]++;  // Athlétisme
          sportsList[5][1]++;  // Course à pied
          sportsList[8][1]++;  // Sports de précision
          sportsList[15][1]++; // Sports d'eau
          sportsList[18][1]++; // Running
          sportsList[0][1]++;  // Sports de raquette
        }
      }
      // --- Q8 : Environnement Spécifique (Index 7) ---
      else if (questionNumber === 7) {
        if (userAnswer === 'a') { // La montagne/nature verticale (Ex: Escalade, Randonnée)
          sportsList[16][1]++; // Escalade
        } else if (userAnswer === 'b') { // L'eau/le nautisme (Ex: Sports d'eau, Voile, Sports de planche)
          sportsList[15][1]++; // Sports d'eau
          sportsList[20][1]++; // Sports de planche
          sportsList[22][1]++; // Voile
        } else if (userAnswer === 'c') { // La glisse (Ex: Sports de glisse, Sports d'hiver)
          sportsList[17][1]++; // Sports de glisse
          sportsList[19][1]++; // Sports d'hiver
          sportsList[20][1]++; // Sports de planche (overlap avec l'eau)
        } else if (userAnswer === 'd') { // Le sol stable/la salle (Ex: Arts martiaux, Fitness)
          sportsList[9][1]++;  // Fitness / Bien être
          sportsList[13][1]++; // Arts martiaux
          sportsList[14][1]++; // Musculation
        }
      }
      // --- Q9 : Matériel Sportif (Index 8) ---
      else if (questionNumber === 8) {
        if (userAnswer === 'a') { // Mon corps seul (Ex: Running, Cross training, Yoga)
          sportsList[4][1]++;  // Cross training
          sportsList[5][1]++;  // Course à pied
          sportsList[9][1]++;  // Fitness / Bien être
          sportsList[18][1]++; // Running
        } else if (userAnswer === 'b') { // Des accessoires de contrôle (Ex: Raquettes, Ballons)
          sportsList[0][1]++;  // Sports de raquette
          sportsList[8][1]++;  // Sports de précision
          sportsList[10][1]++; // Football
          sportsList[12][1]++; // Basketball
          sportsList[21][1]++; // Ultimate (Frisbee)
        } else if (userAnswer === 'c') { // De la machinerie ou des charges lourdes (Ex: Musculation, Vélo)
          sportsList[6][1]++;  // Vélo
          sportsList[14][1]++; // Musculation
        } else if (userAnswer === 'd') { // De l'équipement technique de glisse (Ex: Ski, Planche, Voile)
          sportsList[17][1]++; // Sports de glisse
          sportsList[19][1]++; // Sports d'hiver
          sportsList[20][1]++; // Sports de planche
          sportsList[22][1]++; // Voile
        }
      }
      // --- Q10 : Objectif Principal (Index 9) ---
      else if (questionNumber === 9) {
        // Si la personne choisit "Performance" (a), on augmente son score de Performance
        if (userAnswer === 'a') { // Performance (Vitesse, record, compétition)
          objectif += 4;
        } 
        // Si elle choisit "Bien-être" (b) ou "Esthétique" (c), on augmente le score dans ces catégories.
        // Pour l'exemple, nous allons juste montrer l'incrémentation :
        else if (userAnswer === 'b') { // Bien-être
          objectif += 3;
        }
        else if (userAnswer === 'c') { // Esthétique
          objectif += 2;
        }
        else if (userAnswer === 'd') { // Social
          objectif += 1;
        }
      }
      // --- Q11 : Mesure du Succès (Index 10) ---
      else if (questionNumber === 10) {
        // Renforce l'orientation choisie
        if (userAnswer === 'a') { // Par les chiffres objectifs (Performance)
          objectif += 3;
        } 
        else if (userAnswer === 'b') { // Par le ressenti quotidien (Bien-être)
          objectif += 4;
        } 
        else if (userAnswer === 'c') { // Par les changements visibles (Esthétique)
          objectif += 2;
        } 
        else if (userAnswer === 'd') { // Par le plaisir et l'ambiance (Social)
          objectif += 3;
        }
      }
      // --- Q12 : Horizon de Temps (Index 11) ---
      else if (questionNumber === 11) {
        // L'horizon de temps donne des points à la Performance (court terme/intense)
        // et au Bien-être (long terme/durable).
        if (userAnswer === 'a') { // Court terme (Événement précis, Performance)
          objectif += 4;
        } 
        else if (userAnswer === 'c') { // Long terme (Mode de vie, Bien-être)
          objectif += 2;
        }
        // L'option b "Moyen terme" est neutre, sauf si elle est liée à une forte transformation Esthétique/Performance.
      }
      console.log(sportsList);
      
      // CORRIGÉ : Mettre à jour la variable globale `sportLevel` après la boucle si vous en avez besoin
      sportLevel = localSportLevel;
    });
    
    multiplierParExo=1;
    let sportLevelName = "";
    if (sportLevel < 2) {
      sportLevelName = "bas";
      multiplierParExo = 1;
    }
    else if (sportLevel < 4) {
      sportLevelName = "moyen";
      multiplierParExo = 1.5;
    }
    else {
      sportLevelName = "élevé";
      multiplierParExo = 2;
    }
    document.getElementById('niveau').innerHTML = `Tu as un niveau ${sportLevelName}.`;
    let nbAime = 0;
    sportsList.sort((a, b) => b[1] - a[1]);
    const listeAime = sportsList.slice(0, 5);
    let multiplierNbExo = 1;
    if (objectif<8){
      document.getElementById('objectif').innerHTML = `Tu souhaites t'investir un peu.`;
    }
    else if (objectif<11){
      document.getElementById('objectif').innerHTML = `Tu souhaites t'investir.`;
      multiplierNbExo = 2;
    }
    else {
      document.getElementById('objectif').innerHTML = `Tu souhaites t'investir énormément.`;
      let multiplierNbExo = 3;
    }
    
    
    if (listeAime.length === 0) {
      document.getElementById('sports').innerHTML = `Tu n'aimes aucun sport`;
    }
    else if (listeAime.length === 1) {
      document.getElementById('sports').innerHTML = `Tu aimes le ${listeAime[0][0]}.`;
    }
    else {
      
      let stringSport = `̀Tu aimes le ${listeAime[0][0]}`;
      for (let i = 1; i < (listeAime.length - 1); i++) {
        stringSport += `, le ${listeAime[i][0]}`;
      }
      stringSport += ` et le ${listeAime[listeAime.length - 1][0]}`;
      document.getElementById('sports').innerHTML = stringSport;
    }
    donneConseil(listeAime,multiplierNbExo,multiplierParExo)
  }
  
  // Afficher le quiz immédiatement
  buildQuiz();
  
  function donneConseil(listeAime,multiplierNbExo,multiplierParExo) {
    let affichage ="";
    for (let i = 0;i<listeAime.length;i++){
      if(listeAime[i][0]=="Sports de raquette"){
        
      }
    }

    // EXOS DE BASE (Force générale, Tonification)
    const exosFonctionnelBase = [
      ["Squats (Contrôlé)", 10, 3], // 3 séries de 10
      ["Pompes (surélevées ou genoux)", 8, 3], // 3 séries de 8
      ["Planche (Gainage)", 45, 3], // 3 séries de 45 secondes
      ["Soulevé de terre roumain (léger)", 10, 3], // 3 séries de 10
      ["Crunchs (Abdominaux)", 15, 3] // 3 séries de 15
    ];
    
    // EXOS LATÉRAUX & STABILITÉ (Sports d'équilibre, Anti-rotation)
    const exosFonctionnelStabilite = [
      ["Fentes Latérales", 10, 4], // 4 séries de 10 par jambe
      ["Planche Latérale (par côté)", 30, 3], // 3 séries de 30 secondes par côté
      ["Squats sur une jambe (Pistol assisté)", 6, 3], // 3 séries de 6 par jambe
      ["Rotation de buste (avec élastique)", 15, 4], // 4 séries de 15
      ["Bird-Dog (Gainage dynamique)", 10, 3] // 3 séries de 10
    ];
    
    // EXOS D'EXPLOSIVITÉ & ENDURANCE (Sports Collectifs, Vitesse)
    const exosFonctionnelExplosif = [
      ["Squats Sautés (Jump Squats)", 15, 4], // 4 séries de 15
      ["Burpees", 10, 4], // 4 séries de 10
      ["Pompes Pliométriques (Rapides)", 10, 3], // 3 séries de 10
      ["Course en montée (High Knees)", 45, 3], // 3 séries de 45 secondes
      ["Fentes Pliométriques (Jump Lunges)", 10, 4] // 4 séries de 10 par jambe
    ];
    
    // EXOS D'ENDURANCE & GRAND VOLUME (Course, Vélo, Triathlon)
    const exosFonctionnelEndurance = [
      ["Squats (Volume)", 20, 4], // 4 séries de 20
      ["Fentes (Volume)", 15, 4], // 4 séries de 15 par jambe
      ["Planche (Durée)", 90, 3], // 3 séries de 90 secondes
      ["Crunchs vélos", 20, 4], // 4 séries de 20 par côté
      ["Gainage ventral (Volume total de temps)", 60, 4] // 4 séries de 60 secondes
    ];
    
    
    // --- Attribution des Exercices en fonction des Besoins Sportifs ---
    
    // 1. Sports de raquette (Latéralité, Explosivité, Stabilité)
    let nbExoSportsDeRaquette = exosFonctionnelStabilite;
    
    // 2. Triathlon (Endurance, Fort volume)
    let nbExoTriathlon = exosFonctionnelEndurance;
    
    // 3. Athlétisme (Explosivité, Vitesse)
    let nbExoAthletisme = exosFonctionnelExplosif;
    
    // 4. Sports de combat (Force fonctionnelle, Gainage, Stabilité)
    let nbExoSportsDeCombat = exosFonctionnelStabilite;
    
    // 5. Cross training (Polyvalence, Explosivité, Endurance)
    let nbExoCrossTraining = exosFonctionnelExplosif;
    
    // 6. Course à pied (Endurance, Force du bas du corps)
    let nbExoCourseAPied = exosFonctionnelEndurance;
    
    // 7. Vélo (Endurance, Force des jambes)
    let nbExoVelo = exosFonctionnelEndurance;
    
    // 8. Danses (Stabilité, Équilibre, Force générale)
    let nbExoDanses = exosFonctionnelStabilite;
    
    // 9. Sports de précision (Stabilité, Contrôle musculaire fin)
    let nbExoSportsDePrecision = exosFonctionnelBase;
    
    // 10. Fitness / Bien être (Base, Tonification générale)
    let nbExoFitnessBienEtre = exosFonctionnelBase;
    
    // 11. Football (Explosivité, Changement de direction, Endurance)
    let nbExoFootball = exosFonctionnelExplosif;
    
    // 12. Rugby (Force, Puissance, Explosivité)
    let nbExoRugby = exosFonctionnelExplosif;
    
    // 13. Basketball (Explosivité, Sauts, Force)
    let nbExoBasketball = exosFonctionnelExplosif;
    
    // 14. Arts martiaux (Stabilité, Équilibre, Force fonctionnelle)
    let nbExoArtsMartiaux = exosFonctionnelStabilite;
    
    // 15. Musculation (Force et Tonification générale)
    let nbExoMusculation = exosFonctionnelBase;
    
    // 16. Sports d'eau (Force du haut du corps, Endurance générale)
    let nbExoSportsDEau = exosFonctionnelBase;
    
    // 17. Escalade (Force de Préhension, Stabilité, Gainage)
    let nbExoEscalade = exosFonctionnelStabilite;
    
    // 18. Sports de glisse (Équilibre, Force Latérale, Stabilité)
    let nbExoSportsDeGlisse = exosFonctionnelStabilite;
    
    // 19. Running (Endurance, Stabilité du bas du corps)
    let nbExoRunning = exosFonctionnelEndurance;
    
    // 20. Sports d'hiver (Équilibre, Force Latérale)
    let nbExoSportsDHiver = exosFonctionnelStabilite;
    
    // 21. Sports de planche (Équilibre, Gainage fort, Stabilité)
    let nbExoSportsDePlanche = exosFonctionnelStabilite;
    
    // 22. Ultimate (Endurance, Explosivité, Sauts)
    let nbExoUltimate = exosFonctionnelExplosif;
    
    // 23. Voile (Gainage Antirotation, Force du tronc)
    let nbExoVoile = exosFonctionnelStabilite;
  }
  
  // Ajouter un écouteur d'événement au bouton
  document.getElementById('submit-button').addEventListener('click', setResults);
  console.log(sportLevel);
});