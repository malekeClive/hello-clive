import React, { useState, useRef, useContext } from 'react';
// import './App.css';
import { css } from 'emotion';

import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';
import Bottom from './Components/Bottom';
import About from './Components/About';
import Experience from './Components/Experience';
import Summary from './Components/Summary';
import Next from './Components/Next';
import Expertise from './Components/Expertise';

import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

import { ThemeContext } from './Context/ThemeContext';

// Force CSSPlugin to not get dropped during build
gsap.registerPlugin(CSSPlugin)

function App() {
  const theme = useContext(ThemeContext);
  const [ isSplashScreenDone, setIsSplashScreenDone ] = useState(false);

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); // from -> to

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div className={css`
      background-color: ${theme.theme.background};
      transition: background-color .2s ease-in-out;
      color: ${theme.theme.text};
    `}>
      <SplashScreen setIsSplashScreenDone={setIsSplashScreenDone} />
      { isSplashScreenDone ? 
       <div>
          <main className={css`
            display: flex;
            flex-direction: column;
          `}>
            <section className={css`
              height: 100vh;
            `}>
              <Home />
              <Next executeScroll={executeScroll} />
            </section>

            <section className={css`
              margin: 10px 10%;
            `} ref={myRef}>
              <Summary />
            </section>

            <section className={css`
              margin: 10px 10%;
            `}>
              <Expertise />
            </section>

            <section className={css`
              margin: 10px 10%;
            `}>
              <About />
            </section>

            <section className={css`
              margin-top: 5em;
              margin-left: 10%;
              margin-right: 10%;
            `}>
              <Experience />
            </section>
          </main>
          
          <footer className={css`
            position: relative;
          `}>
            <Bottom />
          </footer>
        </div>
      :
        null
      }
    </div>
  );
}

export default App;
