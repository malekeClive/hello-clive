import React, { useContext } from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../Context/ThemeContext';

export default function Next({ executeScroll }) {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <button onClick={executeScroll} className={css`
        font-family: 'Caveat', cursive;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: ${theme.theme.text};
        width: 150px;
        height: 30px;
        border: none;
        color: ${theme.theme.background};
        outline: none;
        font-size: 1.2rem;
        transition: background-color .2s, color .2s ease-in-out;

        &:hover {
          border: 1px solid ${theme.theme.text};
          background-color: transparent;
          color: ${theme.theme.text};
        }
      `}>
        More about me ?
      </button>
    </div>
  )
}
