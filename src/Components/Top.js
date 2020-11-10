import React, { useEffect, useRef } from 'react';
import { css } from 'emotion';

import { TweenMax, Power3 } from 'gsap';

export default function Top() {
  const line = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    TweenMax.to(
      line.current,
      1,
      {
        width: "80%",
        ease: Power3.easeOut
      }
    );
    
    const delay = setTimeout(() => {
      TweenMax.to(
        text.current,
        1.5,
        {
          y: 0,
          ease: Power3.easeOut
        }
      );
    }, 100);

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={css`
      padding-top: 10%;
      padding-left: 10%;
      padding-right: 10%;
    `}>
      <div className={css`
        overflow: hidden;
      `}>
        <p ref={text} className={css`
          transform: translate(0, 40px);
          font-size: 1.5rem;
          margin-bottom: .5rem;
        `}>
          Front-end Engineer
        </p>
      </div>
      <div ref={line} className={css`
        border-bottom: 3px solid #1e272e;
        width: 0;
      `}>
      </div>
    </div>
  )
}
