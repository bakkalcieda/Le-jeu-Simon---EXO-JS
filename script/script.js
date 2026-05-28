let sequence = [];
let sequenceJoueur = [];
let score = 0;
let jeuEnCours = false;
let tourSimon = false;
let indexMontrer = 0;

// SONS- OSCILLATEUR //
const audioCtx = new AudioContext();
const sons = {
    rouge: 261,
    bleu:  329,
    vert:  392,
    jaune: 523
};

function jouerSon(couleur) {
    const oscillateur = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
// gain pour le niv de volume //
    oscillateur.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillateur.frequency.value = sons[couleur];
    oscillateur.type = "sine";

    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.6);

    oscillateur.start(audioCtx.currentTime);
    oscillateur.stop(audioCtx.currentTime + 0.6);
}


function allumerBouton(couleur) {
    const bouton = document.getElementById(couleur);
    bouton.style.opacity = "1";
    jouerSon(couleur);

    setTimeout(function() {
        bouton.style.opacity = "0.4";
    }, 600);
}

function ajouterCouleur() {
    const couleurs = ["rouge", "bleu", "vert", "jaune"];
    const nombreAleatoire = Math.floor(Math.random() * 4);
    const couleurChoisie = couleurs[nombreAleatoire];
    sequence.push(couleurChoisie);
}

function montrerSequence() {
    tourSimon = true;
    jeuEnCours = false;
    indexMontrer = 0;

    document.getElementById("message").textContent = " reste attentifff";

    setTimeout(function() {
        montrerProchainBouton();
    }, 500);
}

function montrerProchainBouton() {

    if (indexMontrer >= sequence.length) {
        tourSimon = false;
        jeuEnCours = true;
        sequenceJoueur = [];
        document.getElementById("message").textContent = "A toii de jouer";
        return;
    }

    const couleur = sequence[indexMontrer];
    allumerBouton(couleur);
    indexMontrer = indexMontrer + 1;

    setTimeout(function() {
        montrerProchainBouton();
    }, 1000);
}

function demarrerPartie() {
    sequence = [];
    sequenceJoueur = [];
    score = 0;

    document.getElementById("score").textContent = "Score : 0";
    document.getElementById("gameOver").textContent = "";
    document.getElementById("btnDemarrer").disabled = true;

    ajouterCouleur();
    montrerSequence();
}

function clicJoueur(couleur) {
    if (!jeuEnCours) {
        return;
    }

    jeuEnCours = false;

    allumerBouton(couleur);

    sequenceJoueur.push(couleur);

    const index = sequenceJoueur.length - 1;

    if (sequenceJoueur[index] !== sequence[index]) {

        document.getElementById("gameOver").textContent = "Game oveeeer Looser !  ton Score: " + score;
        document.getElementById("message").textContent = "Game Oveeer ";
        document.getElementById("btnDemarrer").disabled = false;
        return;
    }

    if (sequenceJoueur.length === sequence.length) {
        score = score + 1;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("message").textContent = "Youhouuuu";

        setTimeout(function() {
            ajouterCouleur();
            montrerSequence();
        }, 1000);

    } else {
        jeuEnCours = true;
    }
}
