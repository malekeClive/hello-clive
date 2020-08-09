import React from 'react';
import { css } from 'emotion';

export default function About() {
  return (
    <div>
      <div>
        <h3 className={css`
          display: inline-block;
          font-size: 4rem;
          margin: .5rem 0;
          `}>about
        </h3>
        <h3 className={css`
          font-size: 2rem;
          display: inline-block;
          margin: .5rem .5rem;
          font-style: italic;
          color: #474787;
          height: 20px;
        `}>
          | əˈbout
        </h3>
      </div>

      <div>
        <p className={css`
          font-size: 3rem;
          margin: 0;
          `}>I'm a front-end developer based in batam. Currently working as a game developer in a company in batam.</p>
      </div>

      <div className={css`
        display: flex;
        flex-direction: column;
        margin-top: 20px;

        > div {
          margin: 20px 0;
        }
      `}>
        <div>
          <div className={css`
            display: inline-block;
            background-color: #474787;
            color: #fff;
            margin-bottom: 10px;
          `}>
            <h5 className={css`
              font-size: 2rem;
              margin: 0;
            `}>what i usually do</h5>
          </div>

          <div>
            <p className={css`
              font-size: 1.5rem;
              margin: 0;
            `}>front-end development</p>
          </div>
        </div>

        <div>
          <div className={css`
            display: inline-block;
            background-color: #474787;
            color: #fff;
            margin-bottom: 10px;
          `}>
            <h5 className={css`
              font-size: 2rem;
              margin: 0;
            `}>what tech i used</h5>
          </div>

          <div>
            <p className={css`
              font-size: 1.5rem;
              margin: 0;
            `}>
              unity engine (at work)
            </p>

            <p className={css`
              font-size: 1.5rem;
              margin: 0;
            `}>
              react js (self taught)
            </p>
          </div>
        </div>

        <div>
          <div className={css`
            display: inline-block;
            margin-bottom: 10px;
            background-color: #474787;
            color: #fff;
          `}>
            <h5 className={css`
              font-size: 2rem;
              margin: 0;
            `}>contact & social media</h5>
          </div>

          <div>
            <p className={css`
              font-size: 1rem;
              color: #474787;
            `}>
              phone 
            </p>
            <p className={css`
              font-size: 1.3rem;
              margin: 0;
            `}>
              +62-852-6781-9928
            </p>

            <p className={css`
              font-size: 1rem;
              color: #474787;
            `}>
              email
            </p>
            <p className={css`
              font-size: 1.3rem;
              margin: 0;
            `}>
              francoclivemaleke23@gmail.com
            </p>

            <p className={css`
              font-size: 1rem;
              color: #474787;
            `}>
              github
            </p>
            <p className={css`
              font-size: 1.3rem;
              margin: 0;
            `}>
              github.com/malekeclive
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}
