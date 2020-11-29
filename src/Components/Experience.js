import React from 'react';
import imgAstagame from '../images/astagame.jpg';

import { css } from 'emotion';

export default function Experience() {
  return (
    <div className={css`
      margin-bottom: 1em;
    `}>
      <h3 className={css`
        font-weight: 200;
        font-size: 3rem;
        margin-bottom: 3rem;
      `}>Projects</h3>

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
        flex: 1;
        width: 350px;
        object-fit: cover;

        @media only screen and (min-width: 992px) {
          width: 200px;
        }
      `} src={imgAstagame} alt="astagame" />

      <div className={css`
        color: #acaeb0;
        background-color: #13222e;
        padding: 20px;
        width: 350px;

        @media only screen and (min-width: 992px) {
          width: 200px;
        }
      `}>
        <CareerDetail label="Company" title="PT. Asta Satria Investama" />
        <CareerDetail label="Project" title="Casino games" />
        <CareerDetail label="Tech" title="Unity engine" />
        <CareerDetail label="Link" title="https://play.google.com/store/apps/details?id=com.asta.astagame" />
      </div>
    </div>
  )
}

const CareerDetail = ({ label, title }) => {
  return (
    <div>
      <p className={css`
        font-size: .8rem;
        font-weight: 100;
        margin-bottom: 7px;
      `}>{label}</p>
      <p className={css`
        font-size: .8rem;
        margin-bottom: 20px;
        word-wrap: break-word;
      `}>{title}</p>
    </div>
  )
}
