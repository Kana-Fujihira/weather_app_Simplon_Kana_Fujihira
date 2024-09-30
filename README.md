## Weather-app

![23h](https://github.com/user-attachments/assets/5bac35e1-d114-4459-aead-89614aa61312)
![0h](https://github.com/user-attachments/assets/5e78aa4c-b225-4a40-b169-15d34ff0f0ca)


## Scénario
Vous êtes développeur web pour le compte d’une agence web. Votre agence a signé un
contrat pour le développement d’interfaces météo à destination des usagers du réseau de
transport en commun de plusieurs villes de taille moyenne en France. Les écrans seront
intégrés aux écrans d’information dans les stations et dans les transports.
Les écrans doivent être programmés avec les technologies web, embarquées dans la webview
du système des écrans de la compagnie de transports en commun de la ville.
Par chance vous avez un projet existant disponible. Mais celui-ci utilise l’API REST d’open
weather map. Hors vous devez utiliser l’API d’open meteo à la place.
De plus, l’interface ne doit plus inclure de moteur de recherche pour la localisation de
l’information météo. Mais, elle doit inclure un fichier de configuration (JSON par exemple)
dans lequel l’information de la ville concernée sera entrée par l’entreprise de transport, et
utilisée par votre code pour récupérer les bonnes données météo.
Le dépôt git du projet existant, votre point de départ :
https://github.com/madzadev/weather-app

## Livrables

Les fichiers source seront partagés via l’url d’un dépôt Git accessible en ligne (Github, Gitlab...).

## Mettre à jour l’application
● Intégrer le changement d’API en faveur d’open meteo :
○ prendre en main la documentation et le fonctionnement de l’API open meteo,
○ intégrer les changements dans la requête,
○ intégrer les mises à jour nécessaires pour le traitement des données et l’affichage du résultat, en fonction du format de réponse de l’API d’open meteo.
○ Intégrer l’évolution pour ne plus avoir de recherche de la ville mais une localisation pré-configurée dans un fichier de configuration.
○ Intégrer le rafraîchissement des données toutes les heures.

## Tester l’application et livrer
● validez, puis livrez votre projet sur un dépôt Git en ligne.

## License
The project is under [MIT license](https://choosealicense.com/licenses/mit/).
