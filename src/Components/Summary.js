import React, { useState, useContext } from 'react';
import { css } from 'emotion';

import Switcher from './Switcher';
import profileImg from '../images/profile.jpeg';
import { ThemeContext, themes } from '../Context/ThemeContext';

export default function Summary() {
  const theme = useContext(ThemeContext);
  const [ switchTheme, setSwitchTheme ] = useState(false);
  // const [ toggle, setToggle ] = useState(100);

  // false -> light, true -> dark
  const switchThemes = (isLight) => {
    if (isLight) {
      theme.setTheme(themes.light);
      // setToggle(0); 
    } else {
      theme.setTheme(themes.dark);
      // setToggle(100);
    }
  }

  const switchHandler = () => {
    setSwitchTheme(!switchTheme);
    switchThemes(switchTheme);
  }

  return (
    <div className={css`
      position: relative;
    `}>
      <Switcher switchHandler={switchHandler} switchTheme={switchTheme} />
      <h3 className={css`
        font-weight: 200;
        font-size: 3rem;
        margin-bottom: 3rem;
      `}>Profile summary</h3>
      <div className={css`
        display: flex;
        flex-direction: column;
        align-items: center;

        @media only screen and (min-width: 992px) {
          justify-content: space-around;
          flex-direction: row;
        }
      `}>
        <h2 className={css`
          font-family: 'Caveat', cursive;
          font-weight: 100;
          font-size: 2rem;
          width: 300px;
          color: ${ theme.theme.summary };

          @media only screen and (min-width: 480px) {
            font-size: 3rem;
            width: 500px;
          }
        `}>
          I'm a front-end engineer and also i can
          do little bit things on back-end
          side. <br />
          Currently develop a
          casino games using Unity on
          front-end side.
        </h2>
        <img className={css`
          object-fit: cover;
          border-radius: 8px;
          width: 300px;

          @media only screen and (min-width: 992px) {
            width: auto;
          }
        `} src={ profileImg } alt="profile" />
      </div>
    </div>
  )
}
