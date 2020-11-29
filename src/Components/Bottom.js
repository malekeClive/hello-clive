import React from 'react';
import { css } from 'emotion';

export default function Bottom() {
  return (
    <div className={css`
      position: absolute;
      width: 100%;
      padding-left: 10%;
      padding-right: 10%;
    `}>
      <div className={css`
        border-top: 1px solid #1e272e;
      `}></div>
      <div className={css`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(1, 1fr);
        margin-top: 2rem;

        @media only screen and (min-width: 768px) {
          grid-template-columns: repeat(3, 1fr);
        }
      `}>
        <div>
          <Data label="Email" value="francoclivemaleke23@gmail.com" />
          <Data label="Phone" value="+62 852 6781 9928" />
        </div>

        <div>
          <Data label="Github" value="www.github.com/malekeClive" />
        </div>
      </div>
    </div>
  )
}


const Data = ({ label, value }) => {
  return (
    <div className={css`
      margin-bottom: 20px;
    `}>
      <label className={css`
        font-size: 1rem;
      `}>{ label }</label>
      <p>{ value }</p>
    </div>
  )
}