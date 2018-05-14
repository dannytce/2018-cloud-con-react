import 'normalize.css'
import './prism.css'
import './prism.js'

import React from 'react'

import CodeSlide from 'spectacle-code-slide'

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Notes,
  Magic,
  Code,
  Image,
  Quote,
  Slide,
  Text,
  List as SpectacleList,
  ListItem,
} from 'spectacle'

// Import theme
import createTheme from 'spectacle/lib/themes/default'

import List from '../components/List'
import Button from '../JSX/Button'
import CompaniesSlide from '../CompaniesSlide'

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
)

const coToJeReact = [
  { text: 'React je JavaScript knihovna pro vyvoj UI' },
  { text: 'Byl opensource-ovan Facebookem v roce 2013' },
  { text: 'V pomyslnem MVC predstavuje V neboli View vrstvu' },
  { text: 'JSX' },
  { text: 'Je deklarativni' },
  { text: 'Component-based' },
  { text: 'Virtual DOM' },
]

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        {/* 
          **********************************
          *  INTRODUCTION                  
          **********************************
        */}

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Daniel Kijkov
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Frontend Team Leader at STRV
          </Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Image src={require('../images/react.png')} />
          <Notes>
            <ol>
              <li>
                Nez se zacneme bavit o Reactu, zvednete prosim ruku ti, kteri vi
                o co to je.
              </li>
              <li>Ok a ted prosim zvednete ruce ti, kteri React pouzivaji</li>
              <li>
                Uz ne tolik lidi :) * Vyborne, tak doufam, ze po me prednasce se
                to zmeni
              </li>
            </ol>
          </Notes>
        </Slide>

        {/* 
          **********************************
          *  Co to je React?                  
          **********************************
        */}

        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Co to je React?
          </Heading>

          <List endAt={4} data={coToJeReact} />
          <Notes>
            <List startFrom={7} data={coToJeReact} />
          </Notes>
        </Slide>

        {/* 
          **********************************
          *  JSX                  
          **********************************
        */}

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            JSX
          </Heading>
          <List
            data={[
              {
                text:
                  'React narozdil od jinych knihoven nevyuziva templates, ale specialni syntax JSX',
              },
              { text: 'JSX pripomina vzhledem klasicke HTML' },
              { text: 'Vskutku se ale jedna pouze o sugar syntax pro funkci' },
            ]}
          />
          <Notes>
            <List
              startFrom={3}
              data={[
                {
                  text:
                    'React narozdil od jinych knihoven nevyuziva templates, ale specialni syntax JSX',
                },
                { text: 'JSX pripomina vzhledem klasicke HTML' },
                { text: 'Vskutku se ale jedna pouze o sugar syntax pro funkci' },
              ]}
            />
          </Notes>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="jsx"
          code={Button}
          ranges={[
            { loc: [0, 16] },
            { loc: [0, 1] },
            { loc: [2, 3] },
            { loc: [8, 15] },
            { loc: [3, 7] },
            { loc: [10, 13] },
            { loc: [2, 16] },
            { loc: [22, 36] },
            { loc: [10, 13] },
            { loc: [29, 34] },
            { loc: [43, 59] },
            { loc: [62, 82] },
          ]}
        />

        {/* 
          **********************************
          *  Deklarativni                  
          **********************************
        */}

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Co to je React?
          </Heading>
          <List startFrom={4} endAt={5} data={coToJeReact} />
        </Slide>

        <Slide transition={['fade']}>
          <Image
            src={require('../images/deklarativni1.png')}
            margin="0 auto 40px"
          />
          <Appear>
            <Image
              src={require('../images/deklarativni2.png')}
              margin="40px auto 0"
            />
          </Appear>
        </Slide>

        <CodeSlide
          transition={['fade']}
          transitionDuration={0}
          lang="jsx"
          code={`...
<FriendRequests badge={0} />
<Messages badge={0} />
<Notifications badge={0} />
...`}
          ranges={[{ loc: [1, 4] }]}
        />

        <CodeSlide
          transition={['fade']}
          transitionDuration={0}
          lang="jsx"
          code={`...
<FriendRequests badge={0} />
<Messages badge={1} />
<Notifications badge={0} />
...`}
          ranges={[{ loc: [1, 4] }]}
        />

        <CodeSlide
          transition={['fade']}
          transitionDuration={0}
          lang="jsx"
          code={`...
<FriendRequests badge={a} />
<Messages badge={b} />
<Notifications badge={c} />
...`}
          ranges={[{ loc: [1, 4] }]}
        />

        {/* 
          **********************************
          *  Component based                  
          **********************************
        */}

        <Slide transition={['fade']}>
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Co to je React?
          </Heading>

          <List startFrom={5} endAt={6} data={coToJeReact} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={3} caps lineHeight={1} textColor="secondary">
            Component-based
          </Heading>
          <List
            data={[
              {
                text: 'Jednotlive casti UI jsou reprezentovany jako komponenty',
              },
              { text: 'Kazda komponenta muze mit svuj stav' },
              {
                text:
                  'Komponenty se daji jednoduse skladat a tak se daji vytvaret slozita a komplexni UIs',
              },
            ]}
          />
        </Slide>

        <Slide transition={['fade']}>
          <Image
            src={require('../images/deklarativni1.png')}
            margin="0 auto 40px"
          />
        </Slide>

        <CodeSlide
          transition={['fade']}
          transitionDuration={0}
          lang="jsx"
          code={`...
<FriendRequests badge={a} />
<Messages badge={b} />
<Notifications badge={c} />
...

          
          
          
          
const NotificationCenter = (a, b, c) =>
  <Wrapper>
    <FriendRequests badge={a} />
    <Messages badge={b} />
    <Notifications badge={c} />
  </Wrapper>

          
          
          
          
const Header = () =>
  <header>
    <ProfileLink />
    <HomepageLink />
    <NotificationCenter />
    <Help />
  </header>
`}
          ranges={[{ loc: [1, 4] }, { loc: [10, 16] }, { loc: [21, 28] }]}
        />

        {/* 
          **********************************
          *  Virtual DOM
          **********************************
        */}

        <Slide transition={['fade']}>
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Co to je React?
          </Heading>

          <List startFrom={6} data={coToJeReact} />
        </Slide>

        <Slide transition={['fade']} bgColor="primary">
          <Heading size={2} caps lineHeight={1} textColor="secondary">
            Virtual DOM
          </Heading>
          <List
            data={[
              { text: 'React zavedl pouzivani Virtual DOM' },
              {
                text:
                  'Odstinuje nas tak od sahani na DOM, coz je nejdrazsi manipulace na webu',
              },
              {
                text:
                  'Algoritmus Virtual DOMu sam rozhoduje, ktera cast DOMu se ma zaktualizovat',
              },
              { text: 'Deje se to tak na zaklade zmeny stavu komponent' },
              {
                text:
                  'Ale vyvojar vskutku pise pozadovany vysledek a o zbytek se postara React',
              },
            ]}
          />
        </Slide>

        <Slide transition={['fade']}>
          <Image src={require('../images/virtual-dom-1.svg')} />
          <Text textSize={12} margin={20}>
            Source:{' '}
            <a href="http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html">
              http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html
            </a>
          </Text>
        </Slide>

        <Slide transition={['fade']}>
          <Image src={require('../images/virtual-dom-2.svg')} />
          <Text textSize={12} margin={20}>
            Source:{' '}
            <a href="http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html">
              http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html
            </a>
          </Text>
        </Slide>

        {/* 
          **********************************
          *  Proc je tolik povyku kolem Reactu?
          **********************************
        */}
        <Slide transition={['fade']}>
          <Heading size={2} fit caps lineHeight={1} textColor="secondary">
            Proc je tolik povyku kolem Reactu?
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Jedna se o nejrozsirenejsi frontend UI knihovnu na svete
          </Heading>
          <Image src={require('../images/npmtrends.png')} />
        </Slide>

        {/* 
          **********************************
          *  Companies
          **********************************
        */}

        <Slide transition={['fade']} bgDarken={0.75}>
          <CompaniesSlide />
        </Slide>

        {/* 
          **********************************
          *  Learn Once, Write Anywhere
          **********************************
        */}

        <Slide transition={['fade']}>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Learn Once, Write Anywhere
          </Heading>
          <List
            data={[
              {
                text:
                  'React muze byt pomoci Node.js renderovan na serveru, coz je vyborne pro SEO',
                link: 'https://github.com/zeit/next.js/',
              },
              {
                text:
                  'React-Native umoznuje psat plnohodnotne iOS a Android aplikace',
                link: 'https://facebook.github.io/react-native/',
              },
              {
                text: 'Virtualni realita - React 360, Viro AR/VR',
                link: 'https://facebook.github.io/react-360/',
              },
              {
                text: 'Rozsirena realita - React ARKit, Viro AR/VR',
                link: 'https://viromedia.com/',
              },
              {
                text:
                  'Windows 10, Windows 10 Mobile, Universal Windows Platform (UWP) - Xbox One',
                link: 'https://github.com/Microsoft/react-native-windows',
              },
              {
                text: 'react-sketchapp',
                link: 'https://github.com/airbnb/react-sketchapp',
              },
            ]}
          />
        </Slide>

        {/* 
          **********************************
          *  Funkcionální programování
          **********************************
        */}

        <Slide transition={['fade']}>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Funkcionální programování
          </Heading>
          <List
            data={[
              { text: 'Core Reactu je funkcionalni' },
              {
                text: 'Umoznuje to zapisovat stateless funkce, ktere jsou pure',
              },
              { text: 'Velmi jednoduche reusovani komponent' },
              { text: 'Skvely debugging' },
              {
                text:
                  'Genialni developer experience, timetraveling a hot reloading',
              },
            ]}
          />
        </Slide>

        {/* 
          **********************************
          *  Dokumentace a Tooling
          **********************************
        */}

        <Slide transition={['fade']}>
          <Heading size={6} caps lineHeight={1} textColor="secondary">
            Dokumentace a Tooling
          </Heading>
          <SpectacleList>
            <Appear>
              <ListItem textSize={30} padding="10px 0">
                <a href="https://reactjs.org/docs/hello-world.html">
                  Oficialni dokumentace
                </a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30} padding="10px 0">
                <a href="https://github.com/facebook/create-react-app">
                  create-react-app
                </a>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30} padding="10px 0">
                <a href="https://github.com/react-community/create-react-native-app">
                  create-react-native-app
                </a>
                <SpectacleList padding="0 0 0 40px">
                  <ListItem textSize={30} padding="10px 0">
                    pouziva na pozadi Expo
                  </ListItem>
                  <ListItem textSize={30} padding="10px 0">
                    <a href="https://snack.expo.io/">Snack Expo</a>
                  </ListItem>
                </SpectacleList>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textSize={30} padding="10px 0">
                <a href="http://zalmoxisus.github.io/examples/todomvc/">
                  Timetraveling
                </a>{' '}
                a Hot Reloading
              </ListItem>
            </Appear>
          </SpectacleList>
        </Slide>

        {/* 
          **********************************
          *  Budoucnost Reactu?
          **********************************
        */}

        <Slide transition={['fade']}>
          <Heading size={6} fit caps lineHeight={1} textColor="secondary">
            Budoucnost Reactu?
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Image src={require('../images/reason.svg')} />
        </Slide>

        <Slide transition={['fade']}>
          <Image src={require('../images/reason.svg')} />
          <List
            data={[
              { text: 'Nova syntax a toolchain postaveny nad jazykem OCaml' },
              { text: 'Tvurce Reasonu je taky tvurcem Reactu' },
              { text: 'Reason se kompiluje do JavaScriptu diky BucleScriptu' },
              {
                text: 'ReasonReact',
                link: 'https://reasonml.github.io/reason-react/',
              },
            ]}
          />
        </Slide>
          <Slide transition={['fade']}>
              <Image src={require('../images/profit.jpg')} />
          </Slide>
      </Deck>
    )
  }
}
