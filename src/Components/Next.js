import React from 'react'
import { css } from 'emotion';

export default function Next({ executeScroll }) {
  return (
    <div>
      <button onClick={executeScroll} className={css`
        font-family: 'Caveat', cursive;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #1e272e;
        width: 150px;
        height: 30px;
        border: none;
        color: #fff;
        outline: none;
        font-size: 1.2rem;
        transition: background-color .2s, color .2s ease-in-out;

        &:hover {
          border: 1px solid #13222e;
          background-color: transparent;
          color: #13222e;
        }
      `}>
        More about me ?
      </button>
    </div>
  )
}
