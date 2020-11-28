import React from 'react'
import { css } from 'emotion';

export default function Next({ executeScroll }) {
  return (
    <div>
      <button onClick={executeScroll} className={css`
        font-family: 'Caveat', cursive;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #1e272e;
        width: 60px;
        height: 60px;
        border-radius: 30px;    
        border: none;
        font-weight: bold;
        color: #fff;
      `}>
        HEY !
      </button>
    </div>
  )
}
