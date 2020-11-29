import React from 'react';
import { css } from 'emotion';

import profileImg from '../images/profile.jpeg';

export default function Summary() {
  return (
    <div>
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
          color: #8a8a8a;

          @media only screen and (min-width: 480px) {
            font-size: 3rem;
            width: 500px;
          }
        `}>
          I'm a front-end engineer and also i can
          do little bit things on back-end
          side. Currently develop a
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
