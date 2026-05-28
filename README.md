------------------------------------------
------------ Logique utilisée ------------
1. Création des cartes
Chaque mème génère 2 cartes : une image et une phrase.
Les 14 cartes sont mélangées avec sort(() => Math.random() - 0.5).

2. Retournement
Au clic, la carte reçoit la classe .flipped qui affiche le recto.
Les cartes retournées sont stockées dans un tableau flipped[].

3. Vérification de la paire
Quand flipped contient 2 cartes :
Même id + types différents (image ≠ phrase) → paire trouvée
Sinon → les cartes se retournent après 1 seconde

4. Blocage pendant la vérification
La variable locked empêche de cliquer sur d'autres cartes pendant la vérification.

6. Fin de partie
Quand matched[] contient 7 paires → la modal de victoire s'affiche.

------------------------------------------
------------ Comment jouer ?  ------------

Clique sur une carte pour la retourner
Clique sur une deuxième carte pour trouver sa paire
  - Si l'image correspond à la phrase → paire trouvée 
  - Sinon les cartes se retournent et tu réessaies
Trouve les 7 paires en un minimum de tentatives :D
