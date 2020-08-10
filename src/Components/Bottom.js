import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { TweenMax, Power3 } from 'gsap';

export default function Bottom() {
  const top = useRef(null);

  useEffect(() => {
    TweenMax.to(
      top.current,
      .5,
      {
        opacity: 1,
        ease: Power3.easeIn
      }
    )
  }, []);

  return (
    <div ref={ top } className={css`
    `}>
      <div className={css`
        position: absolute;
        left: 0; 
        right: 0;
        margin: 0 auto;
        width: 80%;
        border-top: 2px solid #1e272e;

      `}>
        <div className={css`
          margin: .7rem 0;
          font-size: 1.5rem;
          text-align: center;
        `}>&#128075;</div>
      </div>
    </div>
  )
}
