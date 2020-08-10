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
        y: 0,
        ease: Power3.easeIn
      }
    ).to(
      text2.current,
      1,
      {
        y: 0,
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

          @media only screen and (min-width: 768px) {
            display: inline-block;
            padding-right: 10px;
          }
        `}>
          <span ref={text1} className={css`
            display: inline-block;
            transform: translate(0, 80px);

            @media only screen and (min-width: 768px) {
              transform: translate(0, 120px);
            }
          `}>Franco</span>
        </div>

        <div className={css`
          overflow: hidden;

          @media only screen and (min-width: 768px) {
            display: inline-block;
            padding-right: 20px;
          }
        `}>
          <span ref={text2} className={css`
            display: inline-block;
            transform: translate(0, -80px);

            @media only screen and (min-width: 768px) {
              transform: translate(0, -120px);
            }
          `}> Clive M</span>
        </div>
      </h1>
    </div>
  )
}
