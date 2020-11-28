import React, { useState } from 'react';
// import './App.css';
import { css } from 'emotion';

import Home from './Components/Home';
import SplashScreen from './Components/SplashScreen';
import Top from './Components/Top';
import Bottom from './Components/Bottom';
import About from './Components/About';
import Experience from './Components/Experience';
import Next from './Components/Next';

function App() {
  const [ isSplashScreenDone, setIsSplashScreenDone ] = useState(false);

  return (
    <div className="container">
      {/* <SplashScreen setIsSplashScreenDone={setIsSplashScreenDone} />
      { isSplashScreenDone ? 
        
      :
        null
      } */}
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
              height: 90vh;
            `}>
              <Home />
              <Next />
            </section>

            <section>
              <About />
            </section>

            <section>
              <Experience />
            </section>
          </main>
          
          <footer>
            <Bottom />
          </footer>
        </div>
    </div>
  );
}

export default App;
