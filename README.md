# Kasa - Projet OpenClassRoom

Projet d'OpenClassRoom pour la formation développeur front-end React.

## Scénario

> Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans maintenant. Avec plus de 500 annonces postées chaque jour, Kasa fait partie des leaders de la location d’appartements entre particuliers en France.

> L'occasion parfaite pour vous d'ajouter une belle référence à votre portfolio de freelance !

> Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté back-end, et React côté front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année !

## Objectifs pédagogiques

- Créer des composants avec React
- Développer les routes d'une application web avec React Router
- Initialiser une application web avec un framework

## Structure du projet

```
.gitignore
.prettierrc
package.json
public/
  index.html
  manifest.json
  robots.txt
  site.webmanifest
README.md
src/
  assets/
  components/
    Banner/
      Banner.jsx
      Banner.scss
    Card/
      Card.jsx
      Card.scss
    Collapse/
      assets/
      Collapse.jsx
      Collapse.scss
    Footer/
      Footer.jsx
      Footer.scss
    Gallery/
      Gallery.jsx
      Gallery.scss
    Header/
      Header.jsx
      Header.scss
    Host/
      Host.jsx
      Host.scss
    Rating/
      Rating.jsx
      Rating.scss
    Slideshow/
      Slideshow.jsx
      Slideshow.scss
    Tag/
      Tag.jsx
      Tag.scss
  index.jsx
  index.scss
  pages/
    About/
      About.jsx
      About.scss
    Error/
      Error.jsx
      Error.scss
    Home/
      Home.jsx
      Home.scss
    Logement/
      Logement.jsx
      Logement.scss
  stores/
    logements.json
```

## Installation

1. Clonez le dépôt :

   ```sh
   git clone https://github.com/piirk/kasa.git
   cd kasa
   ```

2. Installez les dépendances :
   ```sh
   npm install
   ```

## Utilisation

Pour démarrer l'application en mode développement :

```sh
npm start
```

Pour créer un build de production :

```sh
npm run build
```

## Dépendances

- React
- React DOM
- React Router DOM
- React Scripts
- Sass

## Auteurs

- [piirk](https://github.com/piirk)

## Licence

Ce projet est sous licence MIT.
