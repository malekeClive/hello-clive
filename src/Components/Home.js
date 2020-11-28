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
      <h1 className={css`
        color: #1e272e;
        text-align: left;
        margin: 10vh auto;
        font-size: 4rem;

        @media only screen and (min-width: 768px) {
          font-size: 6rem;
        }

        @media only screen and (min-width: 1020px) {
          font-size: 8rem;
        }
      `}>
        <div className={css`
          overflow: hidden;
          position: relative;
          height: 1.3em;
        `}>
          <span ref={text1} className={css`
            position: absolute;
            display: inline-block;
            top: .3em;
            opacity: 0;
          `}>HI! I'M CLIVE</span>
        </div>
      </h1>

    </div>
  )
}
