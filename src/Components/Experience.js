import React from 'react';
import imgAstagame from '../images/astagame.jpeg';

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

      <div>
        <p className={css`
          font-size: 1.5rem;
        `}>
          <b>2019 - present. Unity developer at PT. Asta Satria Investama</b>
        </p>
        <div className={css`
          width: 70%;
        `}>
          <img src={imgAstagame} alt="astagame"></img>
          <p>PT. Asta Satria Investama is a startup company that developing casino games like big two, domino susun, poker and domino QQ.</p>
          <p>My job is to develop features like find room menu, profile menu, settings menu, etc.</p>
        </div>
      </div>
    </div>
  )
}