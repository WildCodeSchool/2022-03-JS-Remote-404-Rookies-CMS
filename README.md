Un Site web de type CMS par:

-Fabienne guerin
-Basile Mathieu
-Guillaume Guerit
-Kévin Lavigne

A faire en prioriter au clonage du repos:

0: creé les fichier .env du frontend et du backend sinon rien ne fonctionnera
1: npm run setup
2: cd backend
3: npm run migrade
4: cd ..
5: npm run dev

#### Organigramme:

Ce projet dispose d'une organisation front et back qui communiquent entre elles et qui peuvent être lancées séparément ou ensemble.

2 Dossiers principaux à la racine :

-frontend :
Dossier comportant la partie frontend du site.

-backend :
Dossier comportant la partie backend du site.

fichier de déscription des composants par nom et affichage : Description_compososants_Rookies_CMS.xlsx --> fichier frontend/src/asset

## Frontend :

-Assets : fichier de dossier images
-Components : fichier de stockage des différents composants disponibles dans les pages du site
|-> Admin : stockage des différents composants de la partie Admin du site
-Context : dossier de stockage du context (stockage d'informations globales du site, les variables stockées ici sont utilisées à divers endroits dans le projet et englobent toutes les pages du site en question. )
-Css : stockage des fichiers css
-Data: fichier de stockage des traitements de données spécifiques
-Page: dossier racine des différentes pages du site
|-> Layout: dossier de stockage des différentes couches du site
-Service:(non exploité) permet de référencer les fonctions spécifiques (fetch) réexploités à plusieurs endroits

# les fichier primordiaux du front :

.env: a créer selon modele du .env.sample sinon la consommation du backend fonctionne pas
contexte.jsx: il englobe toute l'app et gere le language qui est lui même utiliser pour tous l'affichage (donc pas de contexte pas d'affichage ni de reception de data du backend)
app.jsx: le point d'encrage de tous les page du site.

## Backend :

-Src:
|->Controllers: fichier de stockage des controllers (controller sert à définir les différentes requêtes qui se lanceront lors de l'appel de la fonction dans le router et donc dans le front)
|->models: lieu de stockage des managers (manager est le lieu de création des différentes requêtes sql qui pouront être utilisées dans le controller)
|->service: lieu de stockage des middlewares

# les fichiers primordiaux du back :

.env: à créer selon modele du .env.sample sinon pas de connection à la db, pas d'envoi de mail pas de connection, au front via les CORS
migrate.js: sert à migrer la db. Des modifs sont à apporter si vous rennomez le RookiesCMS.sql du repos,
Router.js: lieu de création des routes backend.
