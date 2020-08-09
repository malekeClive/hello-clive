import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { TweenMax, Power3 } from 'gsap';

export default function Top() {
  const top = useRef(null);

  useEffect(() => {
    TweenMax.to(
      top.current,
      2,
      {
        opacity: 1,
        ease: Power3.easeOut
      }
    )
  }, []);

  return (
    <div ref={ top } className={css`
      opacity: 0;
    `}>
      <div className={css`
        position: absolute;
        left: 0; 
        right: 0;
        margin: 0 auto;
        width: 80%;
        border-bottom: 2px solid #474787;
      `}>
        <div className={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: .5rem 0;
        `}>
          <p>
            porftolio
          </p>
          <p>
            franco clive maleke
          </p>
          <p>
            &#128054;
          </p>
        </div>
      </div>
    </div>
  )
}
