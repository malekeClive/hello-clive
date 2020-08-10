import React, { useState } from 'react';
// import './App.css';
import { css } from 'emotion';

import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';
import Top from './Components/Top';
import Bottom from './Components/Bottom';
import About from './Components/About';

function App() {
  const [ isSplashScreenDone, setIsSplashScreenDone ] = useState(false);

  return (
    <div className="container">
      <SplashScreen setIsSplashScreenDone={setIsSplashScreenDone} />
      { isSplashScreenDone ? 
        <div>
          <header>
            <Top />
          </header>

          <main className={css`
            display: flex;
            flex-direction: column;
            margin: 10px 10%;
          `}>
            <section className={css`
              height: 15em;

              @media only screen and (min-width: 768px) {
                height: 10em;
              }
            `}>
              <Home />
            </section>
            <section>
              <About />
            </section>
          </main>
          
          <footer>
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
