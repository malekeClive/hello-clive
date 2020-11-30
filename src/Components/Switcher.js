import React, {useContext } from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../Context/ThemeContext';

export default function Switcher({ switchHandler, switchTheme }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={css`
      position: relative;
    `}>
      <div className={css`
        position: absolute;
        top: -35px;
        left: 50%;
      `}>
        <div>
          <div className={css`
            position: absolute;
            width: 5px;
            transform: rotate(0deg);
            border-radius: 5px;
            height: 50px;
            background-color: #ffff75;
            display: ${theme.theme.mode.show};
            transition: background-color .2s ease-out;
          `}>
          </div>
          <div className={css`
            position: absolute;
            width: 5px;
            transform: rotate(45deg);
            border-radius: 5px;
            height: 50px;
            background-color: #ffff75;
            display: ${theme.theme.mode.show};
            transition: background-color .2s ease-out;
          `}>
          </div>
          <div className={css`
            position: absolute;
            width: 5px;
            transform: rotate(90deg);
            border-radius: 5px;
            height: 50px;
            background-color: #ffff75;
            display: ${theme.theme.mode.show};
            transition: background-color .2s ease-out;
          `}>
          </div>
          <div className={css`
            position: absolute;
            width: 5px;
            transform: rotate(135deg);
            border-radius: 5px;
            height: 50px;
            background-color: #ffff75;
            display: ${theme.theme.mode.show};
            transition: background-color .2s ease-out;
          `}>
          </div>
        </div>
        <div>
          <div className={css`
            position: absolute;
            transform: scale(1);
            top: 10px;
            left: -12px;
            width: 30px;
            height: 30px;
            border-radius: 15px;
            background-color: ${theme.theme.mode.object};
          `}>
          </div>
          <div className={css`
            position: absolute;
            transform: scale(1);
            top: 10px;
            left: ${switchTheme ? "-3px" : "-12px" };
            transition: left .2s ease-out;
            width: 30px;
            height: 30px;
            border-radius: 15px;
            opacity: ${switchTheme ? "1" : "0" };
            background-color: ${theme.theme.background};
            transition: opacity .1s ease-in-out;
          `}>
          </div>
          <button onClick={ switchHandler } className={css`
            position: absolute;
            background-color: transparent;
            outline: none;
            border: none;
            width: 70px;
            height: 50px;
            left: -30px;
          `}></button>
        </div>
      </div>
    </div>
  )
}
