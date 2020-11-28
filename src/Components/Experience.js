import React from 'react';
import imgAstagame from '../images/astagame.jpg';

import { css } from 'emotion';

export default function Experience() {
  return (
    <div className={css`
      margin-bottom: 1em;
    `}>
      <div>
        <h3 className={css`
          font-size: 3rem;
          margin: .5rem 0;
        `}>project</h3>
      </div>

      <div className={css`
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-content: center;
        grid-gap: 1em;

        @media only screen and (min-width: 768px) {
          grid-template-columns: repeat(2, 1fr);
        }

      `}>
        <Career />
        <Career />
        <Career />
      </div>
    </div>
  )
}

const Career = () => {
  return (
    <div className={css`
      display: flex;
      flex-direction: column;

      @media only screen and (min-width: 992px) {
        flex-direction: row;
      }
    `}>
      <img className={css`
        width: 100%;
      `} src={imgAstagame} alt="astagame" />

      <div className={css`
        color: #fff;
        transition: .5s ease;
        background-color: #1e272e;
        padding: 5px;
        width: 50%;
      `}>
        <p>PT. Asta Satria Investama</p>
        <p className={css`
          font-style: italic;
        `}>Tech used : Unity</p>
      </div>
    </div>
  )
}