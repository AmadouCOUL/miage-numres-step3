# Q1 : Donner la tailles des fichiers générer par la commande.
Réponse:
Initial chunk files | Names         |  Raw size
polyfills.js        | polyfills     |  90.20 kB | 
main.js             | main          |  18.18 kB | 
styles.css          | styles        |  95 bytes | 
                     | Initial total | 108.48 kB
# Q2 : Donner la tailles des fichiers générer par la commande.
Réponse:
Initial chunk files   | Names         |  Raw size | Estimated transfer size
main-FT3QBEBB.js      | main          | 208.48 kB |                56.93 kB
polyfills-FFHMD2TL.js | polyfills     |  34.52 kB |                11.28 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes

                      | Initial total | 243.00 kB |                68.21 kB

# Q3 : Est-ce que le fichier est lisible ? Quel est l'intêret de minifier les fichiers d'un point de vue éco-responsable ? Pourquoi on ne minifie pas les fichiers générer en mode dev ?
Réponse:
Lisibilité : Non, le fichier est illisible. Il est minifié : les retours à la ligne et espaces sont supprimés, et les noms de variables sont raccourcis pour gagner de la place.

Intérêt éco-responsable : Cela réduit la taille du fichier. Conséquences : moins de données transférées sur le réseau (économie de bande passante) et un décodage plus rapide par le processeur de l'utilisateur (économie de batterie/CPU).

Pourquoi pas en dev : Pour garder le code lisible afin de faciliter le débogage (trouver les erreurs) et pour ne pas ralentir la compilation à chaque modification du code.


# Q4 : Donner la tailles des fichiers générer par la commande.
Réponse:
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-Ck_6z9u0.css    5.65 kB │ gzip:  1.40 kB
dist/assets/index-DjOYzNxq.js   144.35 kB │ gzip: 46.39 kB

# Q5: Quel est l'intérêt du HMR ?
Réponse:
Le HMR permet de mettre à jour le code de l'application en temps réel sans recharger la page entière.

# Q6: Donner la tailles des fichiers générer par la commande. Pourquoi il faut être vigilant sur les libraires et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable ?
Réponse:
dist/index.html                   0.46 kB │ gzip:  0.30 kB
dist/assets/react-CHdo91hT.svg    4.13 kB │ gzip:  2.05 kB
dist/assets/index-Ck_6z9u0.css    5.65 kB │ gzip:  1.40 kB
dist/assets/index-CXkX2fal.js   157.22 kB │ gzip: 51.92 kB

il faut être vigilant sur les librairies et autre composant qu'on ajoute dans nos applications d'un point de vue éco-responsable parce que :

-Chaque librairie alourdit le fichier final, augmentant la consommation d'énergie nécessaire au transfert des données (Infrastructures réseau, 4G/5G).

-Le JavaScript coûte cher : il doit être téléchargé, décompressé, analysé et exécuté. Un code lourd surcharge le processeur, fait chauffer l'appareil et vide la batterie plus rapidement.

- Les applications inutilement lourdes fonctionnent mal sur les appareils anciens (3-4 ans), poussant les utilisateurs à renouveler leur matériel prématurément, ce qui génère des déchets électroniques.

# Q7: Noter les nom des différents fichiers qui ont été générés par la commande.
Réponse:
dist/about/index.html          
dist/index.html                
dist/assets/style-b4SyXn9O.css  
dist/assets/about-D08RWGIN.js 
dist/assets/style-Dgd37vtf.js 
dist/assets/main-QCVwn2m0.js 

# Q8 : Noter les nom des différents fichiers .js qui sont chargés au moment du chargement de la page.
Réponse:
-main-QCVwn2m0.js
-style-Dgd37vtf.js

# Q9 : Noter les nom des différents fichiers .js qui sont chargés au moment du changement de page.
Réponse:
about-D08RWGIN.js
style-Dgd37vtf.js

# Q10: Quel est l'intérêt de lu Code Splitting d'un point de vue éco-responsable ?
Réponse:
Le Code Splitting permet de ne charger que le code nécessaire à la page visitée.

Réseau : Réduit la quantité de données téléchargées (économie de bande passante).

Terminal : Réduit le travail du processeur pour analyser le code (économie de batterie).

Cache : Optimise les mises à jour en ne retéléchargeant que les parties modifiées.


# Q11: Ajouter le screen de votre score :
Screen: 65


# Q12:  Proposition 1
Description:
Mise en place du Lazy Loading et d'un Cache pour les questions/propositions. On remplace le chargement brutal de toute la base de données par un chargement unique des questions, et un chargement des propositions uniquement quand nécessaire.

Nb de requête total du parcours de l'utilisateur: 6 requetes
Taille total des requêtes du parcours de l'utilisateur:3.9 kB
Taille total des fichiers généré : inchangé

# Q13:  Proposition 2
Description: Suppression de l'animation GIF "question.gif" purement décorative et très lourde.

Nb de requête total du parcours de l'utilisateur: 13 requetes
Taille total des requêtes du parcours de l'utilisateur: 97 kB
Taille total des fichiers généré : inchangé

# Q14:  Proposition 3
Description: Retrait de la librairie externe FontAwesome (qui charge un CSS et une police d'écriture) et nettoyage du code CSS.

Nb de requête total du parcours de l'utilisateur:11
Taille total des requêtes du parcours de l'utilisateur: 13,4 kB
Taille total des fichiers générés :1,5 kB