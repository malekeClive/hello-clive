import React from 'react';
import { css } from 'emotion';

import backendImg from '../images/backend256.png';
import gameImg from '../images/game256.png';
import webImg from '../images/web256.png';


export default function About() {
  return (
    <div>
      <h3 className={css`
        font-weight: 200;
        font-size: 3rem;
        margin-bottom: 3rem;
      `}>What i can do for you</h3>
      <div className={css`
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(1, 1fr);

        @media only screen and (min-width: 768px) {
          grid-template-columns: repeat(3, 1fr);
        }
      `}>
        <Field fieldName="Front-end web development" fieldImg={webImg} altImg="front-end dev" />
        <Field fieldName="Game development" fieldImg={gameImg} altImg="game dev" />
        <Field fieldName="Back-end development" fieldImg={backendImg} altImg="back-end dev" />
      </div>
    </div>
  )
}

const Field = ({ fieldName, fieldImg, altImg }) => {
  return (
    <div className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
    `}>
      <img className={css`
        object-fit: cover;
      `} src={ fieldImg } alt="astagame" />
      <p className={css`
      `}>
        { fieldName }
      </p>
    </div>
  )
}
