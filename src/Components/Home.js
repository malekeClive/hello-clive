import React, { useRef, useEffect } from 'react';
import { css } from 'emotion';

import { TimelineMax, Power3 } from 'gsap';

export default function Home() {
  const text1  = useRef(null);

  useEffect(() => {
    let tl = new TimelineMax();
    
    tl.to(
      text1.current,
      1,
      {
        top: 0,
        opacity: 1,
        ease: Power3.easeInOut
      }
    )
  }, []);

  return (
    <div>
      <div className={css`
        position: absolute;
        left: 10px;
        right: 10px;
        top: 10px;
        bottom: 10px;
        border: 1px solid #13222e;
      `}></div>
      <h1 className={css`
        font-family: 'Caveat', cursive;
        color: #1e272e;
        font-size: 6rem;
        margin: 0;
        padding-top: 10rem;

        @media only screen and (min-width: 768px) {
          font-size: 6rem;
        }

        @media only screen and (min-width: 1020px) {
          font-size: 8rem;
        }
      `}>
        <div className={css`
          position: relative;
        `}>
          <div ref={text1} className={css`
            position: absolute;
            text-align: center;
            width: 100%;
            top: .3em;
            opacity: 0;
          `}>I'm Clive
          </div>
        </div>
      </h1>

    </div>
  )
}
