import React, { useContext } from 'react';
import { css } from 'emotion';
import { ThemeContext } from '../Context/ThemeContext';

// vaporwave pallete
const colors = ["1,205,254", "255,113,206", "5,255,161", "185,103,255", "255,251,150"];

export default function Expertise() {
  return (
    <div>
      <h3 className={css`
        font-weight: 200;
        font-size: 3rem;
        margin-bottom: 3rem;
      `}>Expertise</h3>
      <div className={css`
        display: grid;
        grid-gap: 10px;
        justify-items: center;
        grid-template-columns: repeat(2 , 1fr);

        @media only screen and (min-width: 480px) {
          grid-template-columns: repeat(3, 1fr);
          justify-items: left;
        }
      `}>
        <Prolang name="Javascript" />
        <Prolang name="Python" />
        <Prolang name="React JS" />
        <Prolang name="Flask" />
        <Prolang name="React hooks" />
        <Prolang name="Express JS" />
        <Prolang name="HTML & CSS" />
        <Prolang name="SASS" />
        <Prolang name="Tailwind" />
        <Prolang name="Unity" />
        <Prolang name="Version control" />
        <Prolang name="Scrum" />
      </div>
    </div>
  )
}


const Prolang = ({ name }) => {
  const theme = useContext(ThemeContext);

  const getRandomIdx = () => {
    const length = colors.length;
    return Math.floor(Math.random() * length);
  }

  return (
    <div className={css`
      padding: 10px;
    `}>
      <p className={css`
        color: rgb(${colors[getRandomIdx()]});
        font-weight: ${theme.theme.weight};
        padding: 10px 20px;
        border-radius: 5px;
        background-color: ${theme.theme.text};
        box-shadow: 10px 10px 30px .5px rgba(${colors[getRandomIdx()]}, .7);
        font-size: 1rem;
        display: inline-block;
      `}>
        { name }
      </p>
    </div>
  )
}
