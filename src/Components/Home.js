import React, { useRef, useEffect } from 'react';
import { css } from 'emotion';

import { TimelineMax, Power3 } from 'gsap';

export default function Home() {
  const text1  = useRef(null);
  const text2  = useRef(null);

  useEffect(() => {
    let tl = new TimelineMax();
    
    tl.to(
      text1.current,
      1,
      {
        top: 0,
        // y: 0,
        ease: Power3.easeIn
      }
    ).to(
      text2.current,
      1,
      {
        top: 0,
        // y: 0,
        ease: Power3.easeOut
      }
    );
  }, []);

  return (
    <div>
      <h1 className={css`
        color: #1e272e;
        text-align: left;
        margin: 0;
        font-style: italic;
        font-size: 5rem;

        @media only screen and (min-width: 768px) {
          font-size: 7rem;
        }
      `}>
        <div className={css`
          overflow: hidden;
          position: relative;
          height: 1.3em;
          width: 3.5em;

          @media only screen and (min-width: 768px) {
            display: inline-block;
            padding-right: 10px;
          }
        `}>
          <span ref={text1} className={css`
            position: absolute;
            display: inline-block;
            top: -1.1em;
          `}>Franco</span>
        </div>

        <div className={css`
          overflow: hidden;
          position: relative;
          height: 1.3em;
          width: 3.5em;

          @media only screen and (min-width: 768px) {
            display: inline-block;
            padding-right: 20px;
          }
        `}>
          <span ref={text2} className={css`
            position: absolute;
            display: inline-block;
            bottom: -1.1em;
          `}> Clive M</span>
        </div>
      </h1>
    </div>
  )
}
