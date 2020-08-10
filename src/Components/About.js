import React from 'react';
import { css } from 'emotion';

export default function About() {
  return (
    <div>
      <div className={css`
        display: flex;
        align-items: center;

        @media only screen and (min-width: 768px) {
          h3 {
            font-size: 3rem;
          }
          p {
            font-size: 2rem;
          }
        }
      `}>
        <h3 className={css`
          display: inline-block;
          font-size: 2rem;
          margin: .5rem 0;
          `}>about
        </h3>

        {/* <button className={css`
          display: none;

          @media only screen and (min-width: 768px) {

            display: inline-block;
            position: relative;
            background-color: #1e272e;
            left: 2%;
            width: 40px;
            height: 40px;
            border-radius: 20px;
            border: none;
            color: #fff;
          }
        `}>
        </button> */}
      </div>

      <div>
        <p className={css`
          font-size: 1.5rem;
          margin: 0;
          width: 70%;
          `}>I'm a front-end developer based in batam. Currently working as a game developer in a company in batam.</p>
      </div>

      <div className={css`
        display: flex;
        flex-direction: column;
        margin-top: 5em;

        > div {
          margin: 1em 0;
        }

        @media only screen and (min-width: 768px) {
          margin-top: 12em;

          h5 {
            font-size: 2rem;
          }
          p {
            font-size: 1.5rem;
          }
        }
      `}>
        <div>
          <div className={css`
            display: inline-block;
            margin-bottom: 10px;
          `}>
            <h5 className={css`
              font-size: 1.5rem;
              margin: 0;
            `}>what i usually do</h5>
          </div>

          <div>
            <p className={css`
              font-size: 1rem;
              margin: 0;
            `}>front-end development</p>
          </div>
        </div>

        <div>
          <div className={css`
            display: inline-block;
            margin-bottom: 10px;
          `}>
            <h5 className={css`
              font-size: 1.5rem;
              margin: 0;
            `}>what tech i used</h5>
          </div>

          <div className={css`
            font-size: 1rem;
          `}>
            <p className={css`
              margin: 0;
            `}>
              unity engine (at work)
            </p>

            <p className={css`
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
          `}>
            <h5 className={css`
              font-size: 1.5rem;
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
