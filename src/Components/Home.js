import React, { useRef, useEffect } from 'react';
import { css } from 'emotion';

import { TweenMax, Power3 } from 'gsap';

export default function Home() {
  const home  = useRef(null);

  useEffect(() => {
    TweenMax.to(
      home.current,
      3,
      {
        opacity: 1,
        y: 30,
        ease: Power3.easeOut
      }
    );
  }, []);

  return (
    <div className={css`
      position: relative;
      top: 20vh;
    `}>
      <div className={css`
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 100px;
      `}>
      </div>
      <h1 ref={ home } className={css`
        opacity: 0;
        color: #fff;
        text-align: center;
        margin: 0;
        font-style: italic;
        font-size: 8rem;
        text-shadow: 5px 5px #474787;
      `}>
        <div>
          front-end
        </div>
        <div>
          developer
        </div>
      </h1>

    </div>
  )
}
