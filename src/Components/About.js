import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

export default function About() {
  return (
    <div className={css`
      height: 100vh;
    `}>
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
        <Field fieldName="Game development" />
        <Field fieldName="Front-end web development" />
        <Field fieldName="Back-end development" />
      </div>
    </div>
  )
}

const Field = ({ fieldName }) => {
  return (
    <div className={css`
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
    `}>
      <div className={css`
        width: 150px;
        height: 150px;
        background-color: grey;
        width: 150px;
        height: 150px;
      `}>
        image
      </div>
      <p className={css`
      `}>
        { fieldName }
      </p>
    </div>
  )
}
