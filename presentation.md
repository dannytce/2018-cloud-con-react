# Daniel Kijkov

* Ahoj vsichni!
* Frontend Team Leader v STRV
* Pred tim nez jsem pred tremi lety nastoupil do STRV jsem pracoval v Giant.cz a Breezy
* Celkove mam pres 10 let praxe ve web developmentu

# React

# Co to je React?

* React je JavaScript knihovna pro vyvoj UI (tedy uzivatelskeho rozhrani)
* Byl opensource-ovan Facebookem v roce 2013
* V pomyslnem MVC predstavuje V neboli View vrstvu, ale vskutku je o mnoho vic
* Je deklarativni, tedy piseme jak ma vypadat vysledek, nikoliv jak se k tomu vysledku mame dostat
* Je component-based

  * jednotlive casti UI jsou rezeprentovany jako komponenty
  * Kazda komponenta muze mit svuj stav
  * Komponenty se daji jednoduse skladat a tak se daji vytvaret slozita a komplexni UIs

* React narozdil od jinych knihoven nevyuziva templates, ale specialni syntax JSX

  * JSX pripomina vzhledem klasicke HTML
  * Vskutku se ale jedna o pouze sugar syntax pro funkci

* React zavedl pouzivani Virtual DOM
  * Odstinuje nas tak od sahani na DOM, coz je nejdrazsi manipulace na webu
  * Algoritmus Virtual DOM sam rozhoduje, ktera cast DOMu se ma zaktualizovat
  * Deje se to tak na zaklade zmeny stavu komponent
  * Ale vyvojar vskutku pise pozadovany vysledek a o zbytek se postara react

# Proc je tolik povyku kolem Reactu?

* Jedna se o nejrozsirenejsi frontend UI knihovnu na svete (doplnit NPM graph Angular vs. Vue vs. React)
* Stoji za nim Facebook a obrovska komunita

  * Facebook
  * Messenger
  * Instagram
  * WhatsApp
  * Airbnb
  * Netflix
  * Wix
  * New York Times
  * Yahoo
  * Microsoft (Office, Office 365, Outlook, React XP)
  * STRV
  * Pinterest
  * Tinder
  * Twitter
  * Dropbox
  * Codecademy
  * Khan Academy
  * Amazon
  * Atlassian

- "Learn Once, Write Anywhere"

  * React muze byt pomoci Node.js renderovan na serveru, coz je vyborne pro SEO
  * React-Native umoznuje psat plnohodnotne iOS a Android aplikace
  * Virtualni realita - React 360, Viro AR/VR
  * Rozsirena realita - React ARKit, Viro AR/VR
  * https://github.com/Microsoft/react-native-windows
    * Windows 10
    * Windows 10 Mobile
    * Universal Windows Platform (UWP) - Xbox One

- https://github.com/airbnb/react-sketchapp

- Je prukopnicky, zavadi nove patterny, ktere prebiraji/kopiruji ostatni frameworky

  * Preact 3kB alternativa
  * Inferno velmi rychla alternativa React
    * Dominic Gannaway byl nahirovan Facebook
  * Vue.js vyuziva VirtualDOM

- Migrace mezi jednotlivymi verzemi Reactu je velmi jednoducha, Facebook vzdy poskytuje "codemods" pro automatizaci zmen

- Funkcionální programování

  * Core Reactu je funkcionalni
  * Umoznuje to zapisovat stateless funkce, ktere jsou pure
  * Velmi jednoduche reusovani komponent
  * Skvely debugging
  * Genialni developer experience, timetraveling a hot reloading

- create-react-app

  * https://github.com/facebook/create-react-app
  * skvela dokumentace

- create-react-native-app

  * pouziva na pozadi Expo
  * https://snack.expo.io/
  * codepush / appcenter

- ReasonML

  * Nova syntax a toolchain postaveny nad jazykem OCaml
  * Tvurce Reasonu je taky tvurcem Reactu
  * Reason se kompiluje do JavaScriptu diky BucleScriptu
  * ReasonReact
