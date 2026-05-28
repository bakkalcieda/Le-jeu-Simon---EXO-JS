------------------- C'est quoi ce jeu ? -------------------

Le Jeu Simon est un jeu de mémoire.

Simon te montre une séquence de couleurs, et tu dois la répéter dans le bon ordre !

Chaque tour, la séquence devient plus longue.

______________________________________________________________________________
--------------------- Fonctionnalités techniques utilisées -------------------

JavaScript : 

Web Audio API - pour générer les sons

Oscillateur (createOscillator) - génère une onde sonore pour chaque couleur

GainNode (createGain) - contrôle le volume des sons

AudioContext - contexte audio principal

setTimeout / setInterval - gère les délais entre les animations

Array (push, Math.random) - stocke et génère la séquence aléatoire

addEventListener - écoute les clics sur les boutons


CSS : 

CSS Grid (display: grid) - place les 4 boutons en 2x2

Opacity - simule l'effet allumé/éteint des boutons

Border-radius - arrondit les boutons


HTML :

Sémantique de base - div, button, h1, p

